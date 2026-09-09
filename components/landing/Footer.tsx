'use client'
import { APP_URL, DOCS_URL } from '@/lib/links'

import StellarLogo from './StellarLogo'

const links = [
  ['Product', '#product'],
  ['Use Cases', '#use-cases'],
  ['Stellar Ecosystem', '#stellar'],
  ['Docs', DOCS_URL],
  ['App', APP_URL],
  ['Contact', 'mailto:hello@smarttreasury.app'],
]

export default function Footer() {
  return (
    <footer className="border-border border-t py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-heading flex items-center gap-3 font-bold">
            <StellarLogo className="h-6 w-6" />
            Built on Stellar
          </div>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm">
            Smart Treasury is a Stellar-native programmable treasury account for
            controlled payments, scheduled operations, wallet-based approvals,
            and auditable fund flows.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-foreground text-sm transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
