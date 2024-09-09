import type { AppProps } from 'next/app'
import '../app/globals.css'
import { NavLinks } from '@/app/ui/nav-links'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-lvh bg-red-200'>
      <NavLinks />
      <Component {...pageProps} />
    </div>
  )
}
