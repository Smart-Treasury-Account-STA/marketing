'use client'

import { motion } from 'framer-motion'

import { coreFeatures } from './landingData'

export default function CoreFeatures() {
  return (
    <section
      id="features"
      className="bg-foreground text-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-accent font-mono text-xs tracking-[0.28em] uppercase">
            Core features
          </p>
          <h2 className="font-heading text-background mt-4 text-3xl font-bold tracking-[-0.02em] sm:text-5xl">
            Built for controlled treasury workflows.
          </h2>
          <p className="text-background/70 mt-5 text-base leading-8 sm:text-lg">
            Smart Treasury services include policy-controlled payments, weighted
            signer approvals, scheduled treasury operations, revenue split
            support, recovery controls, wallet-first access, and audit-friendly
            history.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map(([Icon, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="border-background/15 bg-background/5 rounded-3xl border p-7"
            >
              <Icon className="text-accent h-7 w-7" />
              <h3 className="font-heading text-background mt-8 text-xl font-bold tracking-[-0.02em]">
                {title}
              </h3>
              <p className="text-background/70 mt-4 leading-7">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
