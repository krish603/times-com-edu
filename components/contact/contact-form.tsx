"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle } from "lucide-react"

const courses = [
  "Web Development",
  "Data Science & AI",
  "Cybersecurity",
  "Mobile App Development",
  "Cloud Computing",
  "UI/UX Design",
  "Digital Marketing",
  "Other",
]

interface FormData {
  name: string
  email: string
  phone: string
  course: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  course?: string
  consent?: string
}

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number is invalid"
    }

    if (!formData.course) {
      newErrors.course = "Please select a course"
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))

    // Clear error when user checks the box
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Form submission successful
      setFormSubmitted(true)
      setIsSubmitting(false)

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
        consent: false,
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormSubmitted(false)
    setErrors({})
  }

  if (formSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been received. One of our representatives will contact you shortly.
          </p>
          <Button className="solid-red" onClick={resetForm}>
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
              required
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Interested Course*
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.course ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
              required
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" /> {errors.course}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="Tell us about your requirements or questions..."
            ></textarea>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className={`mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded ${errors.consent ? "border-red-500" : ""}`}
            required
          />
          <label
            htmlFor="consent"
            className={`ml-2 block text-sm ${errors.consent ? "text-red-600" : "text-gray-700"}`}
          >
            I agree to receive communications from Times Computer Education. Your information is secure and will not be
            shared with third parties.
          </label>
        </div>
        {errors.consent && (
          <p className="mt-1 mb-4 text-sm text-red-600 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" /> {errors.consent}
          </p>
        )}

        <Button type="submit" className="w-full solid-red py-3 h-auto text-lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
