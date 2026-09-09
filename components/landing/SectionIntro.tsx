'use client'

import { motion } from 'framer-motion'

interface SectionIntroProps {
  eyebrow: string
  title: string
  children: React.ReactNode
}

export default function SectionIntro({
  eyebrow,
  title,
  children,
}: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-primary font-mono text-xs tracking-[0.28em] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-heading text-foreground mt-4 text-3xl font-bold tracking-[-0.02em] sm:text-5xl">
        {title}
      </h2>
      <p className="text-muted-foreground mt-5 text-base leading-8 sm:text-lg">
        {children}
      </p>
    </motion.div>
  )
}
