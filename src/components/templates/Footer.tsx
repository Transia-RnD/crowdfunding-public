import Link from 'next/link'

export function Footer() {
  return (
    <div className="p-4 border-t text-center text-muted-foreground bg-background z-20">
      <p>&copy; {new Date().getFullYear()} Transia LLC. All rights reserved.</p>
      {/* <div className="mt-2 space-x-4">
        <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
          Terms of Service
        </Link>
        <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
          Privacy Policy
        </Link>
      </div> */}
    </div>
  )
}

