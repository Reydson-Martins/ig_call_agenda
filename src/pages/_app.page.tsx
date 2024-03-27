import '../lib/dayjs'
import { globalStyles } from '@/src/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { queryClient } from '../lib/react-query'
import { Toaster } from 'sonner'
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Toaster richColors duration={3000} position="top-right" />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
