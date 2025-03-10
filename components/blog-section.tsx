import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI in Education",
    excerpt:
      "Explore how artificial intelligence is transforming the educational landscape and creating new opportunities for learners.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2400&auto=format&fit=crop",
    date: "Mar 15, 2025",
    author: "John Smith",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  },
  {
    title: "Getting Started with Web Development",
    excerpt:
      "A comprehensive guide for beginners looking to start their journey in web development with practical tips and resources.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2400&auto=format&fit=crop",
    date: "Mar 10, 2025",
    author: "Emily Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity Best Practices for 2025",
    excerpt:
      "Learn the essential cybersecurity practices that every professional should implement to protect digital assets.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2400&auto=format&fit=crop",
    date: "Mar 5, 2025",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
]

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest trends and insights in the tech industry through our informative blog posts.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-transform duration-300 hover:scale-105"
            >
              View All Posts
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-gray-600 text-sm">{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                      <img
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-gray-700 text-sm">{post.author}</span>
                  </div>
                  <Link href="/blog" className="text-red-600 hover:text-red-700 flex items-center transition-colors">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

