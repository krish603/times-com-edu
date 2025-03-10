import { Button } from "@/components/ui/button"

interface CoursesCategoryHeroProps {
  title: string
  description: string
  image: string
}

const CoursesCategoryHero = ({ title, description, image }: CoursesCategoryHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-28 md:py-36 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="solid-red px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
              Browse Courses
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesCategoryHero

