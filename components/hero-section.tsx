import { Button } from "@/components/ui/button"
import { Play, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"

const courseCategories = [
  {
    title: "Career Courses",
    category: "Career",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Start your tech journey with foundational skills",
    level: "Beginner",
    link: "/courses/career",
    color: "bg-red-600",
    hoverColor: "group-hover:bg-red-700",
  },
  {
    title: "Professional Courses",
    category: "Professional",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Upgrade your skills for career advancement",
    level: "Intermediate",
    link: "/courses/professional",
    color: "bg-black",
    hoverColor: "group-hover:bg-gray-900",
  },
  {
    title: "Advanced Courses",
    category: "Advanced",
    icon: "/placeholder.svg?height=40&width=40",
    description: "Master cutting-edge technologies",
    level: "Advanced",
    link: "/courses/advanced",
    color: "bg-red-600",
    hoverColor: "group-hover:bg-red-700",
  },
]

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-red-600 font-medium">Government approved CCC course</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Welcome to <span className="gradient-text">Times</span> Family
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover comprehensive computer education programs designed to prepare you for the digital future. From
              beginner to advanced, we have courses for every skill level.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button className="solid-red px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100 px-6 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" /> Watch Video
              </Button>
            </div> */}
          </div>

          {/* Course Categories */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {courseCategories.map((category, index) => (
              <Link href={category.link} key={index} className="group">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div
                    className={`${category.color} transition-colors duration-300 ${category.hoverColor} p-6 flex items-center justify-between`}
                  >
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <div className="bg-white/20 p-2 rounded-full">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-gray-700">
                      <BarChart className="h-4 w-4 mr-2 text-red-600" />
                      <span>{category.level}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* <div className="flex items-center justify-center">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
              ].map((img, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={img || "/placeholder.svg"} alt="Student" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-bold">4.9</span> (2.5k+ reviews)
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

