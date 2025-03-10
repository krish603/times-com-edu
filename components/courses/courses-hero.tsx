import { Button } from "@/components/ui/button"

const CoursesHero = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Explore Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Discover a wide range of computer courses designed to help you build skills for the future. From beginner to
            advanced levels, we have something for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="solid-red px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
              Browse All Courses
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-white/80 hover:text-white px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105"
            >
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesHero

