import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const PlacementsHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
          alt="Placements Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Launch Your <span className="text-red-500">Career</span> With Us
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            At Times Computer Education, we're committed to your success beyond the classroom. Our industry connections
            and placement assistance have helped thousands of students secure rewarding careers in top companies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="solid-red px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
              View Placement Records
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105"
            >
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlacementsHero

