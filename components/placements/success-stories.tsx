"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const successStories = [
  {
    name: "Priya Sharma",
    course: "Full Stack Web Development",
    company: "Microsoft",
    position: "Software Engineer",
    salary: "₹18 LPA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    story:
      "After completing my course at Times Computer Education, I received multiple job offers. The practical training and placement assistance helped me secure my dream job at Microsoft.",
  },
  {
    name: "Rahul Patel",
    course: "Data Science & Machine Learning",
    company: "Amazon",
    position: "Data Scientist",
    salary: "₹22 LPA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    story:
      "The hands-on projects and real-world datasets we worked with during the course prepared me perfectly for my role at Amazon. The placement team was incredibly supportive throughout my job search.",
  },
  {
    name: "Aisha Khan",
    course: "Cybersecurity Expert",
    company: "IBM",
    position: "Security Analyst",
    salary: "₹16 LPA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
    story:
      "The specialized cybersecurity training I received was exactly what top companies were looking for. The mock interviews and resume building workshops were invaluable in my placement journey.",
  },
  {
    name: "Aisha Khan",
    course: "Cybersecurity Expert",
    company: "IBM",
    position: "Security Analyst",
    salary: "₹16 LPA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
    story:
      "The specialized cybersecurity training I received was exactly what top companies were looking for. The mock interviews and resume building workshops were invaluable in my placement journey.",
  },
  {
    name: "Aisha Khan",
    course: "Cybersecurity Expert",
    company: "IBM",
    position: "Security Analyst",
    salary: "₹16 LPA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
    story:
      "The specialized cybersecurity training I received was exactly what top companies were looking for. The mock interviews and resume building workshops were invaluable in my placement journey.",
  },
]

const SuccessStories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students are our best ambassadors. Here are some of their inspiring journeys from education to
            employment.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-4"
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
                    <div className="relative h-64">
                      <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">{story.name}</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-white/90">{story.position}</p>
                          <p className="text-red-400 font-semibold">{story.salary}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                          {story.course}
                        </div>
                        <div className="text-gray-700 font-medium">{story.company}</div>
                      </div>
                      <p className="text-gray-600 mb-4">{story.story}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 z-10"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories

