'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { APP_URL } from '@/lib/links'
import HeroOrb from './HeroOrb'
import StellarLogo from './StellarLogo'
import { proofPoints } from './landingData'

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="self-center"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <StellarLogo className="h-5 w-5 text-foreground" />
          Built on Stellar for programmable treasury operations
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Smart Treasury
        </p>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-7xl lg:text-8xl">
          Programmable treasury on Stellar
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
          Smart Treasury helps teams automate payments, approvals, and treasury
          workflows under predefined onchain rules.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]"
          >
            Launch App <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Link
            href="#use-cases"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-4 font-semibold text-foreground transition hover:border-primary hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
          >
            Explore Use Cases
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {point}
            </div>
          ))}
        </div>
      </motion.div>
      <HeroOrb />
    </section>
  )
}
