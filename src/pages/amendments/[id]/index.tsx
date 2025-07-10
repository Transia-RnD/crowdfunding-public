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
  ChevronLeft,
  ThumbsUp,
  Building,
  Server,
  User,
  Code,
  Copy,
  Github,
  Twitter,
  CalendarClock,
  FileText
} from 'lucide-react'
import { VoteModal } from '@/components/Modal'
import Link from 'next/link'
import useXrpl from '@/context/Xrpl/useXrpl'
import { fetchVoters } from '@/lib/xrpl'
import axios from 'axios'
import { xrpToDrops } from 'xrpl'
import MainLayout from '@/components/templates/Layout'
import { abbrv } from '@/common/helpers/string'
import { fDateFromNow, fDate } from '@/common/helpers/date'
import { AppAmendment, amendments } from '@/common/constants/db'
import { useRouter } from 'next/router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Voter {
  account: string
  avatar: string
  name: string
  type: 'person' | 'validator' | 'company'
  timestamp: number
}

AmendmentDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default function AmendmentDetail() {
  const router = useRouter()
  const { id } = router.query
  const { xrpl } = useXrpl()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [amendment, setAmendment] = useState<AppAmendment | null>(null)
  const [link, setLink] = useState<string | undefined>(undefined)
  const [voterType, setVoterType] = useState<'person' | 'validator' | 'company'>('person')
  const [voters, setVoters] = useState<Voter[]>([])
  const [activeTab, setActiveTab] = useState<string>('people')

  const handleVote = async (type: 'person' | 'validator' | 'company') => {
    setVoterType(type)
    setIsModalOpen(true)
  }

  const submitVote = async () => {
    if (!amendment) return
    
    try {
      setIsSubmitting(true)

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
                amendmentId: amendment.id,
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
    alert('Address copied to clipboard!')
  }

  const updateVoters = async () => {
    if (!amendment) return
    const updatedVoters = await fetchVoters(xrpl, amendment.votingAddress)
    setVoters(updatedVoters)
  }

  useEffect(() => {
    const getAmendment = async () => {
      if (!id) return
      // In a real app, you would fetch from an API
      const found = amendments.find(a => a.id === id)
      if (found) {
        setAmendment(found)
      } else {
        router.push('/amendments')
      }
    }
    
    getAmendment()
  }, [id, router])

  useEffect(() => {
    const fetchAmendmentVoters = async () => {
      if (!amendment) return
      
      const fetchedVoters = await fetchVoters(xrpl, amendment.votingAddress)
      setVoters(fetchedVoters)

      // Subscribe to changes for this amendment
      xrpl.on('transaction', async (message: any) => {
        if (!message || !message.tx_json) return
        if (
          message.tx_json.TransactionType === 'Payment' &&
          message.tx_json.Destination === amendment.votingAddress
        ) {
          await updateVoters()
          return
        }
      })

      await xrpl.request({
        command: 'subscribe',
        accounts: [amendment.votingAddress],
      })
    }

    if (amendment) {
      fetchAmendmentVoters()
    }

    return () => {
      if (amendment?.votingAddress) {
        xrpl.request({
          command: 'unsubscribe',
          accounts: [amendment.votingAddress],
        })
      }
    }
  }, [amendment, xrpl])

  const filteredVoters = () => {
    if (activeTab === 'people') {
      return voters.filter(v => v.type === 'person')
    } else if (activeTab === 'validators') {
      return voters.filter(v => v.type === 'validator')
    } else if (activeTab === 'companies') {
      return voters.filter(v => v.type === 'company')
    }
    return []
  }

  if (!amendment) return null

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
        <Button 
          variant="outline" 
          onClick={() => router.push('/amendments')}
          className="mb-8"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Amendments
        </Button>
        
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4 items-center">
            <div className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {amendment.status}
            </div>
            {amendment.tags?.map((tag, idx) => (
              <div key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100">
                {tag}
              </div>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {amendment.title}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-6">
            {amendment.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {amendment.proposedDate && (
              <div className="flex items-center gap-1">
                <CalendarClock className="h-4 w-4" />
                <span>Proposed: {fDate(new Date(amendment.proposedDate))}</span>
              </div>
            )}
            {amendment.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Proposed by: {amendment.author}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Amendment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <div className="prose max-w-none">
                    <p>{amendment.description}</p>
                  </div>
                </div>

                {amendment.benefits && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                    <ul className="space-y-2">
                      {amendment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="mt-1 text-primary">•</div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {amendment.implementation && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Implementation Details</h3>
                    <div className="prose max-w-none">
                      <p>{amendment.implementation}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {amendment.technicalDetails && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p>{amendment.technicalDetails}</p>
                  </div>
                  
                  {amendment.codeExample && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Example Code</h3>
                      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto">
                        <code>{amendment.codeExample}</code>
                      </pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Voting Status</CardTitle>
                <CardDescription>
                  Support this amendment by voting with your wallet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">People:</span>
                    <span className="font-medium">{voters.filter(v => v.type === 'person').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Validators:</span>
                    <span className="font-medium">{voters.filter(v => v.type === 'validator').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Companies:</span>
                    <span className="font-medium">{voters.filter(v => v.type === 'company').length}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Vote with your wallet:</p>
                  <div className="grid grid-cols-1 gap-2">
                    <Button 
                      onClick={() => handleVote('person')} 
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <User className="mr-2 h-4 w-4 text-primary" /> Vote as Individual
                    </Button>
                    <Button 
                      onClick={() => handleVote('validator')} 
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Server className="mr-2 h-4 w-4 text-primary" /> Vote as Validator
                    </Button>
                    <Button 
                      onClick={() => handleVote('company')} 
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Building className="mr-2 h-4 w-4 text-primary" /> Vote as Company
                    </Button>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Voting Address:</p>
                  <div className="flex space-x-2">
                    <Input value={amendment.votingAddress} readOnly className="text-xs" />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => copyToClipboard(amendment.votingAddress)}
                      title="Copy address"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Send a minimal payment to this address to register your vote.
                  </p>
                </div>