'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { APP_URL } from '@/lib/links'

const links = [
  ['Product', '#product'],
  ['Features', '#features'],
  ['Use Cases', '#use-cases'],
  ['Stellar Integration', '#stellar'],
  ['Vision', '#vision']
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-192x192.png"
            alt="Smart Treasury"
            width={64}
            height={64}
          />
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground"
          >
            Smart Treasury
          </Link>
        </div>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href={APP_URL}
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)] md:inline-flex"
        >
          Launch App
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-border p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              key={label}
              href={href}
              className="block py-3 text-sm text-muted-foreground"
            >
              {label}
            </Link>
          ))}
          <a
            href={APP_URL}
            className="mt-3 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Launch App
          </a>
        </div>
      )}
    </header>
  )
}
