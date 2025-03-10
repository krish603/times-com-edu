"use client"

import { useState } from "react"
import { Clock, Users, BarChart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Career",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
    instructor: "John Smith",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    duration: "8 weeks",
    students: "1.2k",
    level: "Beginner",
    price: "$299",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    fullDescription:
      "This comprehensive course covers everything you need to know to get started with web development. You'll learn HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll be able to build responsive websites from scratch and have a solid foundation for more advanced web development topics.",
    curriculum: [
      "Introduction to Web Development",
      "HTML Fundamentals",
      "CSS Styling and Layout",
      "JavaScript Basics",
      "DOM Manipulation",
      "Responsive Design",
      "Web Accessibility",
      "Final Project: Building a Complete Website",
    ],
    outcomes: [
      "Build responsive websites from scratch",
      "Understand core web technologies",
      "Create interactive web elements",
      "Implement modern design principles",
      "Debug and troubleshoot web applications",
    ],
  },
  {
    id: 2,
    title: "Advanced Data Science",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    instructor: "Emily Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "850",
    level: "Advanced",
    price: "$499",
    description: "Master advanced data science techniques including machine learning and data visualization.",
    fullDescription:
      "Take your data science skills to the next level with this advanced course. You'll learn sophisticated machine learning algorithms, deep learning techniques, and advanced data visualization. This course includes hands-on projects with real-world datasets to give you practical experience solving complex data problems.",
    curriculum: [
      "Advanced Statistical Methods",
      "Machine Learning Algorithms",
      "Deep Learning Fundamentals",
      "Natural Language Processing",
      "Computer Vision",
      "Time Series Analysis",
      "Big Data Processing",
      "Final Project: End-to-End Data Science Solution",
    ],
    outcomes: [
      "Implement advanced machine learning models",
      "Process and analyze large datasets",
      "Create sophisticated data visualizations",
      "Deploy machine learning models to production",
      "Solve complex business problems with data",
    ],
  },
  {
    id: 3,
    title: "Cybersecurity Essentials",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2400&auto=format&fit=crop",
    instructor: "Michael Chen",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "950",
    level: "Intermediate",
    price: "$399",
    description: "Learn essential cybersecurity concepts and techniques to protect digital assets.",
    fullDescription:
      "This comprehensive cybersecurity course will teach you how to identify and mitigate security threats. You'll learn about network security, encryption, ethical hacking, and security best practices. Through hands-on labs and real-world scenarios, you'll develop the skills needed to protect organizations from cyber attacks.",
    curriculum: [
      "Introduction to Cybersecurity",
      "Network Security Fundamentals",
      "Cryptography and Encryption",
      "Vulnerability Assessment",
      "Ethical Hacking Techniques",
      "Security Incident Response",
      "Security Policies and Compliance",
      "Final Project: Security Audit and Implementation",
    ],
    outcomes: [
      "Identify and mitigate security vulnerabilities",
      "Implement effective security controls",
      "Conduct basic security assessments",
      "Respond to security incidents",
      "Develop security policies and procedures",
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    category: "Career",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1170&auto=format&fit=crop",
    instructor: "Sarah Williams",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "780",
    level: "Intermediate",
    price: "$349",
    description: "Learn to build native mobile applications for iOS and Android platforms.",
    fullDescription:
      "This course will teach you how to develop mobile applications for both iOS and Android platforms using React Native. You'll learn component-based architecture, state management, navigation, and how to interact with device features. By the end of the course, you'll be able to build and deploy fully functional mobile apps to app stores.",
    curriculum: [
      "Introduction to Mobile Development",
      "React Native Fundamentals",
      "UI Components and Styling",
      "Navigation and Routing",
      "State Management",
      "API Integration",
      "Device Features and Permissions",
      "Final Project: Complete Mobile Application",
    ],
    outcomes: [
      "Build cross-platform mobile applications",
      "Implement responsive mobile UI designs",
      "Manage application state effectively",
      "Integrate with backend services",
      "Deploy applications to app stores",
    ],
  },
]

const FeaturedCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)

  const openCourseDetails = (course: (typeof courses)[0]) => {
    setSelectedCourse(course)
    document.body.style.overflow = "hidden"
  }

  const closeCourseDetails = () => {
    setSelectedCourse(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Featured <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses designed to help you achieve your career goals in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default FeaturedCourses

