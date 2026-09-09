import CoreFeatures from '@/components/landing/CoreFeature'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'
import ProductSection from '@/components/landing/ProductSection'
import SiteNav from '@/components/landing/SiteNav'
import StellarSection from '@/components/landing/StellarSection'
import UseCases from '@/components/landing/UseCases'
import Vision from '@/components/landing/Vision'
import WorkflowSection from '@/components/landing/WorkflowSection'

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-hidden">
      <SiteNav />
      <Hero />
      <ProductSection />
      <WorkflowSection />
      <CoreFeatures />
      <UseCases />
      <StellarSection />
      <Vision />
      <Footer />
    </main>
  )
}
