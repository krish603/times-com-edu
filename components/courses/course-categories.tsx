import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Career Courses",
    description: "Comprehensive programs designed to prepare you for a successful career in the tech industry.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop",
    link: "/courses/career",
    courses: 12,
    color: "bg-red-600",
  },
  {
    title: "Professional Courses",
    description:
      "Specialized courses for working professionals looking to upgrade their skills and advance their careers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    link: "/courses/professional",
    courses: 15,
    color: "bg-black",
  },
  {
    title: "Advanced Courses",
    description: "Cutting-edge courses covering the latest technologies and advanced concepts for tech enthusiasts.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1170&auto=format&fit=crop",
    link: "/courses/advanced",
    courses: 8,
    color: "bg-red-600",
  },
]

const CourseCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Course <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of course categories to meet your learning needs and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="relative h-56">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`${category.color} text-white px-3 py-1 rounded-full text-sm`}>
                    {category.courses} Courses
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link
                  href={category.link}
                  className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCategories

