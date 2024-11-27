import { useEffect } from 'react'
// next
import { useRouter } from 'next/router'
// config
import { PATH_DASHBOARD } from '@/common/constants/paths'

// ----------------------------------------------------------------------

export default function Index(): void {
  const { pathname, replace, prefetch } = useRouter()

  useEffect(() => {
    if (pathname === '/') {
      replace(PATH_DASHBOARD.campaigns.root)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    prefetch(PATH_DASHBOARD.campaigns.root)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
