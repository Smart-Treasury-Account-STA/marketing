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
  ['Vision', '#vision'],
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-border/70 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
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
            className="font-heading text-foreground text-lg font-bold tracking-[-0.02em]"
          >
            Smart Treasury
          </Link>
        </div>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-muted-foreground hover:text-foreground text-sm transition"
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href={APP_URL}
          className="bg-primary text-primary-foreground hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)] md:inline-flex"
        >
          Launch App
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="border-border rounded-full border p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-border bg-background border-t px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              key={label}
              href={href}
              className="text-muted-foreground block py-3 text-sm"
            >
              {label}
            </Link>
          ))}
          <a
            href={APP_URL}
            className="bg-primary text-primary-foreground mt-3 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Launch App
          </a>
        </div>
      )}
    </header>
  )
}
