import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import MainLayout from '@/components/templates/Layout'
import useXrpl from '@/context/Xrpl/useXrpl'
import { fetchBalance, fetchUSDPrice } from '@/lib/xrpl'
import { useEffect, useState } from 'react'
import { AppCampaign, campaigns } from '@/common/constants/db'

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default function Index() {
  const { xrpl } = useXrpl()

  const [_campaigns, setCampaigns] = useState<AppCampaign[]>([])

  useEffect(() => {
    const fetchCampaigns = async () => {
      for (const campaign of campaigns) {
        const balance = await fetchBalance(xrpl, campaign.account, campaign.endLedger)
        campaign.raised = balance
        campaign.raisedPercent = (balance / campaign.goal) * 100
      }
      setCampaigns(campaigns)
    }
    fetchCampaigns()
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
        {campaigns.map((campaign: AppCampaign) => (
          <Link href={`/campaigns/${campaign.id}`} key={campaign.id} className='z-20'>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>{campaign.title}</CardTitle>
                <CardDescription>{campaign.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress className={campaign.raisedPercent > 100 ? '[&>*]:bg-green-500' : ''} value={campaign.raisedPercent > 100 ? 100 : campaign.raisedPercent} />
                  <div className="flex justify-between text-sm">
                    <span>{campaign.raised.toLocaleString()} XRP raised</span>
                    <span>{campaign.goal.toLocaleString()} XRP goal</span>
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

