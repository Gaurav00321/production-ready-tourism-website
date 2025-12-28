import HeroSection from "@/components/hero-section"
import FeaturedDestinations from "@/components/featured-destinations"
import WhyChooseUs from "@/components/why-choose-us"
import PopularTours from "@/components/popular-tours"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedDestinations />
      <WhyChooseUs />
      <PopularTours />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
