'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
        Home
      </Link>

      <Link className={`link ${pathname === '/demo' ? 'active' : ''}`} href='/demo'>
        demo
      </Link>

      <Link className={`link ${pathname === '/demo2' ? 'active' : ''}`} href='/demo2'>
        demo2
      </Link>
    </nav>
  )
}
