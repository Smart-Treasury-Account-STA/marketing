'use client'
import SectionIntro from './SectionIntro'

const nodes = [
  'Treasury wallet',
  'Smart Treasury Account',
  'Policy checks',
  'Intent registry',
  'Recovery guard',
  'Audit events'
]

export default function WorkflowSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionIntro
          eyebrow="How it works"
          title="A clear route from wallet intent to auditable execution."
        >
          Users connect with a Stellar wallet. Smart Treasury validates
          authority, routes actions through policy, intent, and recovery
          controls, and records events for monitoring and audit views.
        </SectionIntro>
        <div className="mt-16 rounded-[2rem] border border-border bg-card p-5 shadow-sm sm:p-8">
          <div className="grid gap-4 lg:grid-cols-6">
            {nodes.map((node, index) => (
              <div
                key={node}
                className="flex relative rounded-2xl border border-border bg-background p-5"
              >
                <p className="absolute font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                  0{index + 1}
                </p>
                <h3 className="flex w-full min-h-[100px] flex-col items-center justify-center text-center font-heading text-lg font-bold">
                  {node}
                </h3>
                {index < nodes.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-4 bg-primary lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-muted p-5 text-sm leading-7 text-muted-foreground">
            No deployment identifiers, function names, transaction hashes, or
            code-level details are shown here — the public view stays focused on
            product flow and operating benefits.
          </div>
        </div>
      </div>
    </section>
  )
}
