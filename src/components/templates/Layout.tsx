import { Inter } from 'next/font/google'
import { TopAppBar } from '@/components/templates/TopAppBar'
import { Footer } from '@/components/templates/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XRPL Ledger Device Audit Crowdfunding',
  description: 'Support the security audit of the XRPL Ledger Device',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <TopAppBar />
        <main className="flex-grow bg-gray-50">
          {children}
        </main>
        <Footer />
      </div>
  )
}

