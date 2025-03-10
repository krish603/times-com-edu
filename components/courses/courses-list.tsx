"use client"

import { useState } from "react"
import { Clock, Users, BarChart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Course {
  id: number
  title: string
  category: string
  image: string
  instructor: string
  instructorImage: string
  duration: string
  students: string
  level: string
  price: string
  description: string
  fullDescription: string
  curriculum: string[]
  outcomes: string[]
}

interface CoursesListProps {
  courses: Course[]
}

const CoursesList = ({ courses }: CoursesListProps) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const openCourseDetails = (course: Course) => {
    setSelectedCourse(course)
    document.body.style.overflow = "hidden"
  }

  const closeCourseDetails = () => {
    setSelectedCourse(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Showing {courses.length} courses</h2>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
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
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">{course.price}</span>
                  <Button onClick={() => openCourseDetails(course)} className="solid-red">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Details Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedCourse.image || "/placeholder.svg"}
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeCourseDetails}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-900" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {selectedCourse.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{selectedCourse.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap justify-between items-center mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src={selectedCourse.instructorImage || "/placeholder.svg"}
                        alt={selectedCourse.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Instructor</p>
                      <p className="text-gray-600">{selectedCourse.instructor}</p>
                    </div>
                  </div>

                  <div className="flex space-x-6">
                    <div className="text-center">
                      <p className="font-medium text-gray-900">Duration</p>
                      <p className="text-gray-600">{selectedCourse.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">Level</p>
                      <p className="text-gray-600">{selectedCourse.level}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">Students</p>
                      <p className="text-gray-600">{selectedCourse.students}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">About This Course</h3>
                  <p className="text-gray-600 mb-6">{selectedCourse.fullDescription}</p>

                  <h3 className="text-xl font-bold mb-4 text-gray-900">What You'll Learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {selectedCourse.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold mb-4 text-gray-900">Course Curriculum</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    {selectedCourse.curriculum.map((item, index) => (
                      <div
                        key={index}
                        className={`py-3 px-4 ${index !== selectedCourse.curriculum.length - 1 ? "border-b border-gray-200" : ""}`}
                      >
                        <div className="flex items-center">
                          <span className="w-6 h-6 flex items-center justify-center bg-red-600 text-white rounded-full text-sm mr-3">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-600">Course Price</p>
                    <p className="text-3xl font-bold text-red-600">{selectedCourse.price}</p>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      Add to Wishlist
                    </Button>
                    <Button className="solid-red">Enroll Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CoursesList

