import { NavLinks } from '@/app/ui/nav-links'
import { Suspense } from 'react'
import Loading from './loading'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLinks />
      <Suspense fallback={<Loading></Loading>}>
        <div className='bg-red-200'>{children}</div>
      </Suspense>
    </div>
  )
}
