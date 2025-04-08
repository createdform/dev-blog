import { useRouter } from 'next/router'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  const router = useRouter()
  const isRootRoute = router.pathname === '/'

  return (
    <div
      className={`mx-auto max-w-3xl px-4 sm:p-6 ${
        !isRootRoute ? 'xl:max-w-5xl xl:px-0' : ''
      }`}
    >
      {children}
    </div>
  )
}
