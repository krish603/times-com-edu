"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Campus Tour 2025",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    duration: "3:45",
  },
  {
    id: 2,
    title: "Student Success Stories",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    duration: "5:12",
  },
  {
    id: 3,
    title: "Annual Tech Fest Highlights",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    duration: "4:30",
  },
]

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const openVideoModal = (id: number) => {
    setSelectedVideo(id)
    document.body.style.overflow = "hidden"
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = "auto"
  }

  const selectedVideoData = videos.find((video) => video.id === selectedVideo)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Featured <span className="gradient-text">Videos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our collection of videos showcasing campus life, events, and student experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => openVideoModal(video.id)}
                    className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  >
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{video.title}</h3>
                <p className="text-gray-600">Click to watch the full video and explore more about our institute.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && selectedVideoData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeVideoModal}
            className="absolute top-6 right-6 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-4xl w-full">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={selectedVideoData.videoUrl}
                title={selectedVideoData.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-white text-xl font-bold mt-4">{selectedVideoData.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoSection

