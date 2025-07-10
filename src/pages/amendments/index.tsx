'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ArrowRight,
  ThumbsUp,
  Building,
  Server,
  User,
  Plus,
  ChevronRight,
  Filter,
  Copy,
} from 'lucide-react'
import { VoteModal } from '@/components/Modal'
import Link from 'next/link'
import useXrpl from '@/context/Xrpl/useXrpl'
import { fetchBalance, fetchVoters } from '@/lib/xrpl'
import axios from 'axios'
import { xrpToDrops } from 'xrpl'
import MainLayout from '@/components/templates/Layout'
import { abbrv } from '@/common/helpers/string'
import { fDateFromNow } from '@/common/helpers/date'
import { AppAmendment, amendments } from '@/common/constants/db'
import { useRouter } from 'next/router'

interface Voter {
  account: string
  avatar: string
  name: string
  type: 'person' | 'validator' | 'company'
  timestamp: number
}

AmendmentsList.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default function AmendmentsList() {
  const router = useRouter()
  const { xrpl } = useXrpl()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentAmendment, setCurrentAmendment] = useState<AppAmendment | null>(null)
  const [amendmentsList, setAmendmentsList] = useState<AppAmendment[]>([])
  const [link, setLink] = useState<string | undefined>(undefined)
  const [filter, setFilter] = useState<string>('all')
  const [voterType, setVoterType] = useState<'person' | 'validator' | 'company'>('person')

  // Vote lists for each amendment
  const [votersMap, setVotersMap] = useState<Record<string, Voter[]>>({})

  const handleVote = async (amendmentId: string, type: 'person' | 'validator' | 'company') => {
    setCurrentAmendment(amendmentsList.find(a => a.id === amendmentId) || null)
    setVoterType(type)
    setIsModalOpen(true)
  }

  const submitVote = async (amendmentId: string) => {
    try {
      setIsSubmitting(true)
      const amendment = amendmentsList.find(a => a.id === amendmentId)
      if (!amendment) {
        throw new Error('Amendment not found')
      }

      const response = await axios.post(
        `${process.env.API_HOST || 'http://localhost:3000'}/payload`,
        {
          TransactionType: 'Payment',
          Amount: xrpToDrops(0.000001), // Minimal amount as this is just a vote
          Destination: amendment.votingAddress,
          Memos: [{
            Memo: {
              MemoData: Buffer.from(JSON.stringify({
                type: voterType,
                amendmentId: amendmentId,
              })).toString('hex')
            }
          }]
        },
      )
      setLink(response.data.next.always)
      setIsSubmitting(false)
      setIsModalOpen(false)
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
      alert('An error occurred. Please try again.')
    }
  }

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address)
    alert('Amendment address copied to clipboard!')
  }

  const updateVoters = async (amendmentId: string) => {
    const amendment = amendmentsList.find(a => a.id === amendmentId)
    if (!amendment) return

    const voters = await fetchVoters(xrpl, amendment.votingAddress)
    setVotersMap(prev => ({
      ...prev,
      [amendmentId]: voters
    }))
  }

  const getFilteredAmendments = () => {
    if (filter === 'all') return amendmentsList
    return amendmentsList.filter(amendment => amendment.status === filter)
  }

  useEffect(() => {
    const getAmendments = async () => {
      // In a real app, you would fetch this from an API
      setAmendmentsList(amendments || [])
    }
    getAmendments()
  }, [])

  useEffect(() => {
    const setupVoterListeners = async () => {
      // Initialize voter lists for each amendment
      const votersMapInitial: Record<string, Voter[]> = {}
      
      for (const amendment of amendmentsList) {
        const voters = await fetchVoters(xrpl, amendment.votingAddress)
        votersMapInitial[amendment.id] = voters

        // Subscribe to changes for this amendment's voting address
        xrpl.on('transaction', async (message: any) => {
          if (!message || !message.tx_json) return
          if (
            message.tx_json.TransactionType === 'Payment' &&
            message.tx_json.Destination === amendment.votingAddress
          ) {
            await updateVoters(amendment.id)
            return
          }
        })

        await xrpl.request({
          command: 'subscribe',
          accounts: [amendment.votingAddress],
        })
      }

      setVotersMap(votersMapInitial)
    }

    if (amendmentsList.length > 0) {
      setupVoterListeners()
    }

    return () => {
      // Unsubscribe from all accounts when unmounting
      if (amendmentsList.length > 0) {
        const addresses = amendmentsList.map(a => a.votingAddress)
        xrpl.request({
          command: 'unsubscribe',
          accounts: addresses,
        })
      }
    }
  }, [amendmentsList])

  const getVotersByType = (amendmentId: string, type: 'person' | 'validator' | 'company') => {
    return (votersMap[amendmentId] || []).filter(voter => voter.type === type)
  }

  const navigateToAmendment = (amendmentId: string) => {
    router.push(`/amendment/${amendmentId}`)
  }

  return (
    <div className="min-h-screen text-gray-900 relative">
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            XRPL Amendment Ideas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse and vote on proposed amendments to the XRP Ledger. Show your support to help prioritize development efforts.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'proposed' ? 'default' : 'outline'} 
              onClick={() => setFilter('proposed')}
            >
              Proposed
            </Button>
            <Button 
              variant={filter === 'development' ? 'default' : 'outline'} 
              onClick={() => setFilter('development')}
            >
              In Development
            </Button>
            <Button 
              variant={filter === 'voting' ? 'default' : 'outline'} 
              onClick={() => setFilter('voting')}
            >
              Voting
            </Button>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Submit New Idea
          </Button>
        </div>

        <div className="grid gap-6 mb-12">
          {getFilteredAmendments().map((amendment) => (
            <Card key={amendment.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="cursor-pointer" onClick={() => navigateToAmendment(amendment.id)}>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{amendment.title}</CardTitle>
                    <CardDescription className="mt-2">{amendment.shortDescription}</CardDescription>
                  </div>
                  <div className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                    {amendment.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-slate-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <User className="mr-2 h-5 w-5 text-primary" />
                        People <span className="ml-2 text-sm font-normal text-muted-foreground">({getVotersByType(amendment.id, 'person').length})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <ul className="space-y-3">
                        {getVotersByType(amendment.id, 'person').slice(0, 3).map((voter, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <img 
                              src={voter.avatar} 
                              alt={voter.name} 
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm">
                              <p className="font-medium">{voter.name || abbrv(voter.account)}</p>
                              <p className="text-xs text-muted-foreground">
                                {fDateFromNow(new Date(voter.timestamp))}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        onClick={() => handleVote(amendment.id, 'person')}
                        size="sm" 
                        variant="outline" 
                        className="w-full"
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" /> Vote as Individual
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-slate-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Server className="mr-2 h-5 w-5 text-primary" />
                        Validators <span className="ml-2 text-sm font-normal text-muted-foreground">({getVotersByType(amendment.id, 'validator').length})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <ul className="space-y-3">
                        {getVotersByType(amendment.id, 'validator').slice(0, 3).map((voter, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <img 
                              src={voter.avatar} 
                              alt={voter.name} 
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm">
                              <p className="font-medium">{voter.name || abbrv(voter.account)}</p>
                              <p className="text-xs text-muted-foreground">
                                {fDateFromNow(new Date(voter.timestamp))}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        onClick={() => handleVote(amendment.id, 'validator')}
                        size="sm" 
                        variant="outline" 
                        className="w-full"
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" /> Vote as Validator
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-slate-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Building className="mr-2 h-5 w-5 text-primary" />
                        Companies <span className="ml-2 text-sm font-normal text-muted-foreground">({getVotersByType(amendment.id, 'company').length})</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <ul className="space-y-3">
                        {getVotersByType(amendment.id, 'company').slice(0, 3).map((voter, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <img 
                              src={voter.avatar} 
                              alt={voter.name} 
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm">
                              <p className="font-medium">{voter.name || abbrv(voter.account)}</p>
                              <p className="text-xs text-muted-foreground">
                                {fDateFromNow(new Date(voter.timestamp))}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        onClick={() => handleVote(amendment.id, 'company')}
                        size="sm" 
                        variant="outline" 
                        className="w-full"
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" /> Vote as Company
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Voting Address: </span>
                    <code className="bg-slate-100 px-1 py-0.5 rounded">{abbrv(amendment.votingAddress)}</code>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => copyToClipboard(amendment.votingAddress)}
                      className="h-6 w-6 ml-1"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => navigateToAmendment(amendment.id)}
                  >
                    View Details <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border border-primary/20 shadow-md mb-12">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">
              What are XRPL Amendments?
            </h2>
            <p className="text-muted-foreground">
              Amendments are new features or changes to the XRP Ledger protocol that require consensus from the network's validators. 
              By showing support for an amendment idea, you help developers prioritize their efforts and demonstrate real-world demand 
              for the feature. Voting requires a small XRP payment as a spam protection measure.
            </p>
          </CardContent>
        </Card>
      </div>

      {currentAmendment && (
        <VoteModal
          isOpen={link !== undefined || isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setLink(undefined)
            setCurrentAmendment(null)
          }}
          onSubmit={() => submitVote(currentAmendment.id)}
          isSubmitting={isSubmitting}
          link={link}
          amendmentId={currentAmendment.id}
          amendmentTitle={currentAmendment.title}
          voterType={voterType}
        />
      )}
    </div>
  )
}