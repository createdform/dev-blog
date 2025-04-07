import Image from 'next/image'
import { useRouter } from 'next/router'

import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

import Logo from '@/data/logo.svg'

import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  // const router = useRouter()
  // const currentPath = router.asPath

  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <header className='flex items-center justify-between py-10'>
          <div>
            <Link href='/' aria-label={siteMetadata.headerTitle}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center sm:mr-3'>
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className='hidden text-2xl font-semibold sm:block'>
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className='flex items-center text-lg leading-5'>
            {/* <div className='hidden sm:block'>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`relative p-1 font-medium sm:p-4 ${
                    currentPath === link.href
                      ? 'text-[#00C764]'
                      : 'text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {link.title}
                  {currentPath === link.href && (
                    <div
                      className='translate-x- absolute -bottom-3 left-1/2 overflow-visible'
                      style={{
                        width: '80px',
                        height: '115px',
                        transform: 'translate(-50%, 0)',
                      }}
                    >
                      <Image
                        src='/static/images/highlighted-menu-item.svg'
                        alt='Highlighted Menu Item'
                        width={80}
                        height={160}
                        style={{
                          objectFit: 'contain',
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  )}
                </Link>
              ))}
            </div> */}
            <div>hello</div>
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
