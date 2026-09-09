'use client'

import { ArrowRight } from 'lucide-react'

import { APP_URL, DOCS_URL } from '@/lib/links'

import SectionIntro from './SectionIntro'

export default function Vision() {
  return (
    <section id="vision" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          eyebrow="Vision"
          title="Treasury operations should be programmable, transparent, and safe by design."
        >
          Smart Treasury brings this model to Stellar through programmable
          accounts that combine wallet access, treasury rules, scheduled
          execution, and recovery safeguards.
        </SectionIntro>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]"
          >
            Launch App <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href={DOCS_URL}
            className="border-border bg-background text-foreground hover:border-primary inline-flex items-center justify-center rounded-full border px-7 py-4 font-semibold transition hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]"
          >
            Read the Docs
          </a>
        </div>
        <p className="text-muted-foreground mx-auto mt-10 max-w-3xl text-center text-sm leading-7">
          Designed as a non-custodial treasury-control system: Smart Treasury
          provides policy and execution controls, not custody or official
          Stellar endorsement.
        </p>
      </div>
    </section>
  )
}
