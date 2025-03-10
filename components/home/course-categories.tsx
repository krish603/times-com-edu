import { Button } from "@/components/ui/button"
import { Clock, Users, BarChart } from "lucide-react"
import Link from "next/link"

const courseCategories = [
  {
    title: "Career Courses",
    category: "Career",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop",
    description:
      "Comprehensive programs designed to prepare you for a successful career in the tech industry. These courses provide a solid foundation of skills and knowledge needed to start your professional journey.",
    duration: "6-12 weeks",
    students: "5k+",
    level: "Beginner",
    link: "/courses/career",
  },
  {
    title: "Professional Courses",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    description:
      "Specialized courses for working professionals looking to upgrade their skills and advance their careers. These programs focus on in-demand technologies and methodologies used in the industry today.",
    duration: "8-16 weeks",
    students: "3.5k+",
    level: "Intermediate",
    link: "/courses/professional",
  },
  {
    title: "Advanced Courses",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1170&auto=format&fit=crop",
    description:
      "Cutting-edge courses covering the latest technologies and advanced concepts for tech enthusiasts. These programs are designed for those looking to master specialized areas and stay ahead of industry trends.",
    duration: "10-14 weeks",
    students: "2k+",
    level: "Advanced",
    link: "/courses/advanced",
  },
]

const CourseCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Course <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our comprehensive range of courses designed to help you achieve your career goals in the tech
              industry.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="solid-red transition-transform duration-300 hover:scale-105">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {category.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{category.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{category.students} students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BarChart className="h-4 w-4 mr-2" />
                    <span>{category.level}</span>
                  </div>
                </div>
                <Button className="w-full solid-red transition-transform duration-300 hover:scale-105">
                  <Link href={category.link}>Explore Courses</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCategories

