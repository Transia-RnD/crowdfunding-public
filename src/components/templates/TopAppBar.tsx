import Link from "next/link"

export function TopAppBar() {
  return (
    <header className="bg-background border-b z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Decentralend
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/campaigns" className="text-foreground hover:text-primary transition-colors">
                Campaigns
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

