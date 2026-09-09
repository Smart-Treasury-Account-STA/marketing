'use client'

import SectionIntro from './SectionIntro'
import StellarLogo from './StellarLogo'
import { stellarTools } from './landingData'

export default function StellarSection() {
  return (
    <section
      id="stellar"
      className="border-border bg-card/50 border-y py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="border-border bg-background text-foreground mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border">
          <StellarLogo className="h-10 w-10" />
        </div>
        <SectionIntro
          eyebrow="Stellar integration"
          title="Built for Stellar treasury operations."
        >
          Smart Treasury uses Stellar&rsquo;s fast settlement, low fees, wallet
          ecosystem, and Soroban smart contract layer to make treasury
          operations programmable, transparent, and easier to control.
        </SectionIntro>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stellarTools.map(([Icon, title, text]) => (
            <div
              key={title}
              className="border-border bg-background rounded-3xl border p-6"
            >
              <Icon className="text-primary h-6 w-6" />
              <h3 className="font-heading mt-6 text-lg font-bold">{title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mx-auto mt-10 max-w-3xl text-center text-sm leading-7">
          Smart Treasury is not presented as official Stellar or SDF
          infrastructure. Stellar is the underlying ecosystem and integration
          layer.
        </p>
      </div>
    </section>
  )
}
