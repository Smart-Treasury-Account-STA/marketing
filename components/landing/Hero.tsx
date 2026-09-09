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
      className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pt-24 lg:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="self-center"
      >
        <div className="border-border bg-card text-muted-foreground inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm">
          <StellarLogo className="text-foreground h-5 w-5" />
          Built on Stellar for programmable treasury operations
        </div>
        <p className="text-primary mt-10 font-mono text-xs tracking-[0.3em] uppercase">
          Smart Treasury
        </p>
        <h1 className="font-heading text-foreground mt-5 max-w-4xl text-5xl font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          Programmable treasury on Stellar
        </h1>
        <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-8">
          Smart Treasury helps teams automate payments, approvals, and treasury
          workflows under predefined onchain rules.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]"
          >
            Launch App <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Link
            href="#use-cases"
            className="border-border bg-background text-foreground hover:border-primary inline-flex items-center justify-center rounded-full border px-7 py-4 font-semibold transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
          >
            Explore Use Cases
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="text-muted-foreground flex items-center gap-3 text-sm"
            >
              <CheckCircle2 className="text-primary h-4 w-4" />
              {point}
            </div>
          ))}
        </div>
      </motion.div>
      <HeroOrb />
    </section>
  )
}
