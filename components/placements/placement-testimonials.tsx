"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Software Developer at Google",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    content:
      "The placement team at Times Computer Education was exceptional. They not only helped me prepare for interviews but also connected me with the right companies. Their mock interview sessions were particularly helpful in building my confidence.",
  },
  {
    name: "Neha Gupta",
    role: "Data Analyst at Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
    content:
      "I was skeptical about the placement guarantee at first, but Times Computer Education delivered on their promise. Within two months of completing my course, I had multiple job offers to choose from. The career counseling and resume building workshops made all the difference.",
  },
  {
    name: "Arjun Singh",
    role: "Cybersecurity Analyst at IBM",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    content:
      "What sets Times Computer Education apart is their industry connections. The placement team has strong relationships with top companies, which opens doors that would otherwise be difficult to access. Their guidance throughout the placement process was invaluable.",
  },
]

const PlacementTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="gradient-text">Placed Students Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear directly from our alumni about their placement experience and how our support helped them secure their
            dream jobs.
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

export default PlacementTestimonials

