"use client"

import { useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development: A Beginner's Guide",
    excerpt:
      "Learn the essential skills and tools you need to start your journey as a web developer. This comprehensive guide covers HTML, CSS, JavaScript, and more.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2400&auto=format&fit=crop",
    date: "March 10, 2025",
    author: "Emily Johnson",
    category: "Web Development",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for 2025",
    excerpt:
      "Stay protected in an increasingly digital world with these essential cybersecurity practices. Learn how to safeguard your personal and business data.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2400&auto=format&fit=crop",
    date: "March 5, 2025",
    author: "Michael Chen",
    category: "Cybersecurity",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Rise of No-Code Development Platforms",
    excerpt:
      "Explore how no-code platforms are democratizing software development and enabling non-technical users to create powerful applications.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1170&auto=format&fit=crop",
    date: "February 28, 2025",
    author: "Sarah Williams",
    category: "Technology Trends",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Machine Learning for Beginners: Key Concepts Explained",
    excerpt:
      "Demystifying machine learning concepts for beginners. Learn about algorithms, data preprocessing, and model training in simple terms.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2400&auto=format&fit=crop",
    date: "February 20, 2025",
    author: "David Wilson",
    category: "Machine Learning",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "How to Build a Successful Career in Data Science",
    excerpt:
      "Navigate your path to becoming a successful data scientist with this comprehensive career guide. Learn about required skills, education, and job opportunities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    date: "February 15, 2025",
    author: "Jessica Chen",
    category: "Career Advice",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "The Impact of 5G Technology on IoT Development",
    excerpt:
      "Discover how 5G technology is revolutionizing the Internet of Things landscape and enabling new possibilities for connected devices.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1170&auto=format&fit=crop",
    date: "February 8, 2025",
    author: "Robert Johnson",
    category: "IoT",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
  },
]

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 4
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
        <div className="flex items-center">
          <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
          >
            <div className="relative h-48">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4 text-sm text-gray-600">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1 text-red-600" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-red-600" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-red-600 hover:text-red-700 flex items-center font-medium transition-colors"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600"
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              className={
                currentPage === i + 1
                  ? "solid-red"
                  : "border-gray-300 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600"
              }
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600"
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BlogGrid

