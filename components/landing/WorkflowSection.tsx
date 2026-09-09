'use client'
import SectionIntro from './SectionIntro'

const nodes = [
  'Treasury wallet',
  'Smart Treasury Account',
  'Policy checks',
  'Intent registry',
  'Recovery guard',
  'Audit events',
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
        <div className="border-border bg-card mt-16 rounded-[2rem] border p-5 shadow-sm sm:p-8">
          <div className="grid gap-4 lg:grid-cols-6">
            {nodes.map((node, index) => (
              <div
                key={node}
                className="border-border bg-background relative flex rounded-2xl border p-5"
              >
                <p className="text-primary absolute font-mono text-[0.7rem] tracking-[0.2em] uppercase">
                  0{index + 1}
                </p>
                <h3 className="font-heading flex min-h-[100px] w-full flex-col items-center justify-center text-center text-lg font-bold">
                  {node}
                </h3>
                {index < nodes.length - 1 && (
                  <div className="bg-primary absolute top-1/2 -right-4 hidden h-px w-4 lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-muted text-muted-foreground mt-6 rounded-2xl p-5 text-sm leading-7">
            No deployment identifiers, function names, transaction hashes, or
            code-level details are shown here — the public view stays focused on
            product flow and operating benefits.
          </div>
        </div>
      </div>
    </section>
  )
}
