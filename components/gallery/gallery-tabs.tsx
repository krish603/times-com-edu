"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All" },
  { id: "campus", name: "Campus" },
  { id: "events", name: "Events" },
  { id: "students", name: "Students" },
  { id: "facilities", name: "Facilities" },
  { id: "workshops", name: "Workshops" },
]

const GalleryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "solid-red"
                    : "border-gray-300 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryTabs

