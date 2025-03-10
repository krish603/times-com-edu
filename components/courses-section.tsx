import { Button } from "@/components/ui/button"
import { Clock, Users, BarChart } from "lucide-react"

const courses = [
  {
    title: "Web Development Fundamentals",
    category: "Career",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
    instructor: "John Smith",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    duration: "8 weeks",
    students: "1.2k",
    level: "Beginner",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
  },
  {
    title: "Advanced Data Science",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    instructor: "Emily Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "850",
    level: "Advanced",
    description: "Master advanced data science techniques including machine learning and data visualization.",
  },
  {
    title: "Cybersecurity Essentials",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2400&auto=format&fit=crop",
    instructor: "Michael Chen",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "950",
    level: "Intermediate",
    description: "Learn essential cybersecurity concepts and techniques to protect digital assets.",
  },
]

const CoursesSection = () => {
  return (
    <section className="pt-28 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our most popular courses designed to help you achieve your career goals in the tech industry.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button className="solid-red transition-transform duration-300 hover:scale-105">View All Courses</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={course.instructorImage || "/placeholder.svg"}
                      alt={course.instructor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-gray-700">{course.instructor}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BarChart className="h-4 w-4 mr-2" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <Button className="w-full solid-red transition-transform duration-300 hover:scale-105">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-6 md:mt-6 flex justify-center">
          <Button className="solid-red transition-transform duration-300 hover:scale-105">
            View All Courses
          </Button>
        </div> */}
      </div>
    </section>
  )
}

export default CoursesSection

