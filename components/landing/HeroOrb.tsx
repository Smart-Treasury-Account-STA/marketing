'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

export default function HeroOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative"
    >
      <div className="bg-accent/30 absolute inset-8 rounded-full blur-3xl" />
      <div className="border-border bg-card shadow-primary/10 relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl">
        <Image
          src="/hero_image.png"
          alt="Abstract glass policy orb representing Smart Treasury controls"
          className="aspect-4/3 w-full rounded-[1.5rem] object-cover"
          width={600}
          height={450}
        />
        <div className="border-border/80 bg-background/85 absolute right-6 bottom-6 left-6 rounded-2xl border p-4 backdrop-blur-md">
          <div className="text-muted-foreground flex items-center justify-between font-mono text-xs tracking-[0.18em] uppercase">
            <span>Payment Policy</span>
            <span className="text-primary">Active</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <span className="bg-primary/10 text-primary rounded-full px-3 py-2">
              Threshold 3/5
            </span>
            <span className="bg-accent text-accent-foreground rounded-full px-3 py-2">
              Scheduled
            </span>
            <span className="bg-muted text-muted-foreground rounded-full px-3 py-2">
              SAC assets
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
