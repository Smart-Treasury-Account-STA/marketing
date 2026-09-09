'use client'

import { motion } from 'framer-motion'

import SectionIntro from './SectionIntro'
import { whatItDoes } from './landingData'

export default function ProductSection() {
  return (
    <section
      id="product"
      className="border-border bg-card/50 border-y py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          eyebrow="Product"
          title="Move treasury operations from manual approvals to programmable controls."
        >
          Smart Treasury combines Soroban smart contracts, SAC asset support,
          wallet-based signing, and audit-friendly events to make treasury
          workflows more secure, controlled, and easier to operate.
        </SectionIntro>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whatItDoes.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-border bg-background rounded-3xl border p-7 shadow-sm"
            >
              <div className="bg-primary mb-6 h-px w-16" />
              <h3 className="font-heading text-xl font-bold tracking-[-0.02em]">
                {title}
              </h3>
              <p className="text-muted-foreground mt-4 leading-7">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
