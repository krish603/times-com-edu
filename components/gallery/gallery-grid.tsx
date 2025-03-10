"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop",
    alt: "Students collaborating",
    category: "students",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    alt: "Computer lab",
    category: "facilities",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
    alt: "Graduation ceremony",
    category: "events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "Campus building",
    category: "campus",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop",
    alt: "Coding workshop",
    category: "workshops",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop",
    alt: "Student working on project",
    category: "students",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    alt: "Instructor teaching",
    category: "events",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    alt: "Student portrait",
    category: "students",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop",
    alt: "Computer classroom",
    category: "facilities",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop",
    alt: "Team meeting",
    category: "events",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop",
    alt: "Hackathon event",
    category: "workshops",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    alt: "Tech setup",
    category: "facilities",
  },
]

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-4xl w-full max-h-[80vh]">
            <img
              src={selectedImageData.src || "/placeholder.svg"}
              alt={selectedImageData.alt}
              className="w-full h-full object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImageData.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryGrid

