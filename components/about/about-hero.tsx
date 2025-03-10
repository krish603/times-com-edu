import { Button } from "@/components/ui/button"

const AboutHero = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            About <span className="gradient-text">Times Computer Education</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Empowering students with cutting-edge technology education since 2005. We've helped thousands of students
            transform their careers and achieve their dreams in the tech industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="solid-red px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
              Our Courses
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

