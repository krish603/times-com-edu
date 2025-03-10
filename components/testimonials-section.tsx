"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    content:
      "The courses at TechEdu completely transformed my career. I went from knowing basic HTML to becoming a full-stack developer in just 6 months. The instructors are incredibly knowledgeable and supportive.",
  },
  {
    name: "David Chen",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    content:
      "I took the Advanced Data Science course and it was exactly what I needed to transition into AI research. The curriculum is comprehensive and up-to-date with the latest industry standards.",
  },
  {
    name: "Maria Rodriguez",
    role: "Cybersecurity Analyst",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    content:
      "The Cybersecurity program provided me with practical skills that I use every day in my job. The hands-on labs and real-world scenarios were invaluable for my learning experience.",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their learning experience and how our courses have helped them achieve their
            goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-xl relative transition-all duration-500 hover:shadow-2xl">
            <div className="absolute -top-6 left-12 bg-red-600 p-4 rounded-full">
              <Quote className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-600/30">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[currentIndex].content}"</p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-red-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

