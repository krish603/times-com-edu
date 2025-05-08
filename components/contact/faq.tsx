"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll in a course by visiting our nearest branch, calling our admissions team, or filling out the contact form on our website. Our team will guide you through the enrollment process and help you choose the right course based on your goals and background.",
  },
  {
    question: "Do you offer online courses?",
    answer:
      "Yes, we offer both online and offline courses. Our online courses provide the same quality education with interactive sessions, practical assignments, and dedicated mentorship. You can choose the learning mode that best suits your preferences and schedule.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We offer various payment options including one-time payment, installment plans, and education loans through our banking partners. We also provide scholarships for deserving candidates. Our admissions team can help you choose the best payment option for your situation.",
  },
  {
    question: "Is there a placement guarantee?",
    answer:
      "Yes, we offer a placement guarantee for eligible students who maintain good attendance, complete all assignments, and actively participate in placement activities. Our placement team works with 250+ hiring partners to ensure our students find suitable job opportunities.",
  },
  {
    question: "Can I switch from one course to another?",
    answer:
      "Yes, you can switch courses within the first two weeks of starting a program if you feel another course would be more suitable for you. Our counselors will help you with the transition and ensure you don't miss out on any important content.",
  },
]

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, admissions process, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  className={`w-full flex justify-between items-center p-6 text-left ${openFaq === index ? "bg-red-50" : ""}`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 className={`text-lg font-medium ${openFaq === index ? "text-red-600" : "text-gray-900"}`}>
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions?{" "}
              <a href="#" className="text-red-600 font-medium hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
