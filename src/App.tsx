"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Wallet, Zap, ChevronRight, Twitter, Copy } from 'lucide-react'
import { ContributeModal } from "./components/Modal"
import { Link } from "react-router-dom"
import useXrpl from "./context/Xrpl/useXrpl"
import { fetchBalance, fetchUSDPrice } from "./lib/xrpl"
import axios from "axios"
import { xrpToDrops } from "xrpl"


export default function Home() {
  const { xrpl } = useXrpl()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [raisedAmount, setRaisedAmount] = useState<number>(0)
  const [percentageRaised, setPercentRaised] = useState<number>(0)
  const [goalAmount, setGoalAmount] = useState<number>(0)

  // @ts-ignore - API_HOST is a custom environment variable
  const fundingAddress = import.meta.env.VITE_XRPL_ACCOUNT || ""
  const auditLink = "/assets/20241112_Audit_Offer.pdf"
  const prLink = "https://github.com/LedgerHQ/app-xrp/pull/52"

  const newFeatures = [
    "NFToken - Mint, Create Offers, Cancel Offers and Accept Offers",
    "Clawback - Clawback IOU Tokens",
    "AMMCreate - Create Delete, Deposit, Withdraw and Vote on AMM Pools",
  ]

  const handleContribute = async (amount: number) => {
    try {
      setIsSubmitting(true)
      // @ts-ignore - API_HOST is a custom environment variable
      const response = await axios.post(`${import.meta.env.VITE_API_HOST || "http://localhost:3000"}/payload`, {
        TransactionType: 'Payment',
        Amount: xrpToDrops(amount),
        Destination: fundingAddress
      })
      window.open(response.data.next.always, '_blank')
      setIsSubmitting(false)
      setIsModalOpen(false)
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
      alert("An error occurred. Please try again.")
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fundingAddress)
    alert("Funding address copied to clipboard!")
  }

  useEffect(() => {
    const updateBalance = async () => {
      const xrpPrice = await fetchUSDPrice(xrpl);
      const goalUSD = 4850
      const goalXrp = Number(goalUSD / xrpPrice).toFixed(0)
      const balance = await fetchBalance(xrpl, fundingAddress)
      const raised = balance / Number(goalXrp)
      setPercentRaised(raised * 100)
      setRaisedAmount(balance)
      setGoalAmount(Number(goalXrp))
    }
    updateBalance()
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 relative">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Ledger Device Audit
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Updating the Ledger Device for the XRP Ledger.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          <Card className="md:col-span-2 shadow-md">
            <CardContent className="p-8">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-semibold mb-4">Funding Progress</h2>
                <div className="w-full max-w-md mb-4">
                  <Progress value={percentageRaised > 100 ? 100 : percentageRaised} className="h-2" />
                </div>
                <p className="text-2xl font-semibold mb-2">
                  <span className="text-primary">{raisedAmount.toLocaleString()} XRP</span>
                  <span className="text-muted-foreground"> / </span>
                  <span>{goalAmount.toLocaleString()} XRP</span>
                </p>
                <p className="text-muted-foreground">{percentageRaised.toFixed(1)}% Complete</p>
              </div>
              <p className="text-center text-muted-foreground">
                Your contribution pays for the audit and the developer.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl mb-2">
                <Zap className="w-5 h-5 text-primary" />
                Contribute Now
              </CardTitle>
              <CardDescription>
                Support the development of advanced features for the Ledger Device.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={() => setIsModalOpen(true)} className="w-full">
                Make a Contribution
              </Button>
              <div className="space-y-2">
                <p className="text-sm font-medium">Or send XRP directly to this address:</p>
                <div className="flex items-center space-x-2">
                  <Input 
                    value={fundingAddress} 
                    readOnly 
                    className="text-sm"
                  />
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
                    src="/assets/profile.jpeg?height=40&width=40"
                    alt="Developer Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">Denis Angell</h3>
                    <p className="text-xs text-muted-foreground">Lead Developer</p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link target="_blank" to="https://twitter.com/@angell_denis" rel="noopener noreferrer">
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
                New Features
              </CardTitle>
              <CardDescription>
                Enhancements coming to the XRP Ledger Device:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {newFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link target="_blank" to={auditLink} className="flex items-center justify-center gap-2">
              View Audit Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link target="_blank" to={prLink} className="flex items-center justify-center gap-2">
              View GitHub PR
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <ContributeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleContribute}
        isSubmitting={isSubmitting}
      />
    </main>
  )
}

