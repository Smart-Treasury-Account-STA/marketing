'use client'
import Link from 'next/link'
import StellarLogo from './StellarLogo'

const links = [
  ['Product', '#product'],
  ['Use Cases', '#use-cases'],
  ['Stellar Ecosystem', '#stellar'],
  ['Early Access', '#early-access'],
  ['Contact', 'mailto:hello@smarttreasury.app']
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-heading font-bold">
            <StellarLogo className="h-6 w-6" />
            Built on Stellar
          </div>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Smart Treasury is a Stellar-native programmable treasury account for
            controlled payments, scheduled operations, wallet-based approvals,
            and auditable fund flows.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
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
      </div>
    </footer>
  )
}
