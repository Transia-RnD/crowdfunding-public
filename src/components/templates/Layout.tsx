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
            <div 
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          ></div>
          {children}
        </main>
        <Footer />
      </div>
  )
}

