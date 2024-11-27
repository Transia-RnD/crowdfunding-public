import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import MainLayout from '@/components/templates/Layout'
import useXrpl from '@/context/Xrpl/useXrpl'
import { fetchBalance, fetchUSDPrice } from '@/lib/xrpl'
import { useEffect, useState } from 'react'

const campaigns = [
  {
    id: '1',
    account: '',
    title: 'Ledger Device Audit #1',
    description: 'Updating the Ledger Device for the XRP Ledger.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    raised: 75000,
    goal: 100000,
    link: {
      type: '',
      href: '',
    },
    owner: {
      avatar: '',
      name: '',
      title: '',
      twitter: ''
    }
  },
]

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default function Index() {
  const { xrpl } = useXrpl()

  const [raisedAmount, setRaisedAmount] = useState<number>(0)
  const [percentageRaised, setPercentRaised] = useState<number>(0)
  const [goalAmount, setGoalAmount] = useState<number>(0)
  const fundingAddress = process.env.XRPL_ACCOUNT || ""

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
    <div className="container mx-auto px-4 py-8">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      <h1 className="text-3xl font-bold mb-8 text-center">Campaigns</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <Link href={`/campaigns/${campaign.id}`} key={campaign.id} className='z-20'>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>{campaign.title}</CardTitle>
                <CardDescription>{campaign.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={percentageRaised} />
                  <div className="flex justify-between text-sm">
                    <span>{raisedAmount.toLocaleString()} XRP raised</span>
                    <span>{goalAmount.toLocaleString()} XRP goal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

