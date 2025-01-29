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
  Wallet,
  Zap,
  ChevronRight,
  Twitter,
  Copy,
  SignalHigh,
} from 'lucide-react'
import { ContributeModal } from '@/components/Modal'
import Link from 'next/link'
import useXrpl from '@/context/Xrpl/useXrpl'
import { fetchBalance, fetchContributors } from '@/lib/xrpl'
import axios from 'axios'
import { xrpToDrops } from 'xrpl'
import MainLayout from '@/components/templates/Layout'
import { abbrv } from '@/common/helpers/string'
import { fDateFromNow } from '@/common/helpers/date'
import { AppCampaign, campaigns } from '@/common/constants/db'
import { useRouter } from 'next/router'

interface Contributor {
  amount: number
  account: string
  avatar: string
  name: string
  timestamp: number
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default function Index() {
  const { id } = useRouter().query
  const { xrpl, xrpPrice } = useXrpl()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [campaign, setCampaign] = useState<AppCampaign>(undefined)

  // Mock data for top contributors
  const [topContributors, setTopContributors] = useState<Contributor[]>([])
  const [link, setLink] = useState<string | undefined>(undefined)
  const handleContribute = async (amount: number) => {
    try {
      setIsSubmitting(true)
      const response = await axios.post(
        `${process.env.API_HOST || 'http://localhost:3000'}/payload`,
        {
          TransactionType: 'Payment',
          Amount: xrpToDrops(amount),
          Destination: campaign.account,
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(campaign.account)
    alert('Funding address copied to clipboard!')
  }

  const updateBalance = async (campaign: AppCampaign) => {
    const balance = await fetchBalance(xrpl, campaign.account, campaign.endLedger)
    campaign.raised = balance
    campaign.raisedPercent = (balance / campaign.goal) * 100
    setCampaign(campaign)
    const c = await fetchContributors(xrpl, campaign.account, campaign.startLedger, campaign.endLedger)
    setTopContributors(c)
  }

  useEffect(() => {
    const getCampaign = async () => {
      const campaign = campaigns.find((c) => c.id === id)
      setCampaign(campaign)
    }
    getCampaign()
  }, [])

  useEffect(() => {
    const listenBalance = async (campaign: AppCampaign) => {
      xrpl.on('transaction', async (message: any) => {
        if (!message || !message.tx_json) return
        if (
          message.tx_json.TransactionType === 'Payment' &&
          message.tx_json.Destination === campaign.account
        ) {
          await updateBalance(campaign)
          return
        }
      })
      await xrpl.request({
        command: 'subscribe',
        accounts: [campaign.account],
      })
      await updateBalance(campaign)
    }
    campaign ? listenBalance(campaign) : null
    return () => {
      if (campaign?.account) {
        xrpl.request({
          command: 'unsubscribe',
          accounts: [campaign?.account],
        })
      }
    }
  }, [campaign])

  if (!campaign || campaign?.raised === 0) return null

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
            {campaign.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {campaign.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          <Card className="md:col-span-2 shadow-md">
            <CardContent className="p-8">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Funding Progress
                </h2>
                <div className="relative w-full max-w-md mb-4">
                  {/* Primary Progress Bar */}
                  <div className="w-full bg-gray-200 rounded h-2 relative">
                    <div
                      className={`h-full rounded ${
                        campaign.raisedPercent > 100 ? 'bg-green-500' : 'bg-primary'
                      }`}
                      style={{
                        width: `${
                          campaign.raisedPercent > 100 ? 100 : campaign.raisedPercent
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-2xl font-semibold mb-2">
                  <span
                    className={`${
                      campaign.raisedPercent > 100 ? 'text-green-500' : 'text-primary'
                    }`}
                  >
                    {campaign.raised.toLocaleString()} XRP
                  </span>
                  {campaign.hardGoal && (
                    <>
                      <span className="text-muted-foreground"> / </span>
                      <span>{campaign.goal.toLocaleString()} XRP</span>
                    </>
                  )}
                </p>
                {campaign.hardGoal && (
                  <>
                    <p className="text-muted-foreground">
                      {(campaign.raisedPercent > 100 ? 100 : campaign.raisedPercent).toFixed(1)}
                      % Complete
                    </p>
                    <p className="text-sm text-green-800 mt-1">
                      {campaign.overfunding}
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl mb-2">
                <Zap className="w-5 h-5 text-primary" />
                {campaign.contribute.title}
              </CardTitle>
              <CardDescription>
                {campaign.contribute.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={() => setIsModalOpen(true)} className="w-full">
                Make a Contribution
              </Button>
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Or send XRP directly to this address:
                </p>
                <div className="flex items-center space-x-2">
                  <Input value={campaign.account} readOnly className="text-sm" />
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={copyToClipboard}
                    title="Copy address"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <img
                    src={campaign.contribute.owner.avatar}
                    alt="Developer Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{campaign.contribute.owner.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {campaign.contribute.owner.title}
                    </p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link
                    target="_blank"
                    href={campaign.contribute.owner.twitter}
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Follow
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl mb-2">
                <Wallet className="w-5 h-5 text-primary" />
                {campaign.features.title}
              </CardTitle>
              <CardDescription>
              {campaign.features.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {campaign.features.items.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl mb-2">
                <SignalHigh className="w-5 h-5 text-primary" />
                Recent Contributors
              </CardTitle>
              <CardDescription>
                Thank you to all our supporters!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={contributor.avatar}
                        alt={`Contributor ${index + 1}`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-lg font-medium">
                          {contributor.amount.toLocaleString()} XRP
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {abbrv(contributor.account)}
                        </p>
                      </div>
                    </div>
                    <p className="hidden md:block text-sm align-right text-muted-foreground">
                        {fDateFromNow(new Date(contributor.timestamp), true)}
                      </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer Section */}
        {campaign.disclaimer && (
          <Card className="bg-yellow-50 border border-yellow-200 shadow-md mb-12">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">
                Disclaimer
              </h2>
              <p className="text-yellow-700">
                {campaign.disclaimer}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
          {campaign.links.map((link, index) => (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link
                target="_blank"
                href={link.href}
                className="flex items-center justify-center gap-2"
              >
                {link.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <ContributeModal
        isOpen={link !== undefined || isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setLink(undefined)
        }}
        onSubmit={handleContribute}
        isSubmitting={isSubmitting}
        link={link}
      />
    </div>
  )
}
