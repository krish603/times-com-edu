"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log({ searchTerm, selectedLevel, selectedDuration })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 shadow-lg p-6 md:p-8">
          <div className="flex items-center mb-6">
            <Search className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Find Your Perfect Course</h2>
          </div>

          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Courses
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="e.g. Web Development, Data Science"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <select
                  id="level"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <select
                  id="duration"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  <option value="">Any Duration</option>
                  <option value="short">Short (0-4 weeks)</option>
                  <option value="medium">Medium (1-3 months)</option>
                  <option value="long">Long (3+ months)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button type="button" className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                <Filter className="h-4 w-4 mr-2" /> More Filters
              </button>

              <Button type="submit" className="solid-red">
                Search Courses
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CourseSearch

