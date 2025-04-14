import '@fontsource/inter/variable-full.css'
import 'katex/dist/katex.css'
import Head from 'next/head'
import { ThemeProvider, type ThemeProviderProps } from 'next-themes'

import { ClientReload } from '@/components/ClientReload'
import LayoutWrapper from '@/components/LayoutWrapper'
import Analytics from '@/components/analytics'
import '@/css/prism.css'
import '@/css/tailwind.css'
import siteMetadata from '@/data/siteMetadata'

import type { AppProps } from 'next/app'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      {...({
        attribute: 'class',
        defaultTheme: siteMetadata.theme,
      } as ThemeProviderProps)}
    >
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta
          name='impact-site-verification'
          content='33073b86-12c4-4176-ab8f-1d4490dae6dd'
        ></meta>
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
