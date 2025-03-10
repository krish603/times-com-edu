import { Button } from "@/components/ui/button"
import { Calendar, User, Tag } from "lucide-react"

const FeaturedPost = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Featured <span className="gradient-text">Article</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular and insightful content that you shouldn't miss.
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                  alt="Featured Post"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4 text-sm text-gray-600">
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-2 text-red-600" />
                  <span>March 5, 2025</span>
                </div>
                <div className="flex items-center mr-6">
                  <User className="h-4 w-4 mr-2 text-red-600" />
                  <span>John Smith</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-red-600" />
                  <span>Technology</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                The Future of AI in Education: Transforming Learning Experiences
              </h3>
              <p className="text-gray-600 mb-6">
                Artificial intelligence is revolutionizing education in unprecedented ways. From personalized learning
                paths to intelligent tutoring systems, AI is helping educators create more effective and engaging
                learning experiences for students of all ages and abilities.
              </p>
              <p className="text-gray-600 mb-8">
                In this comprehensive article, we explore how AI technologies are being integrated into educational
                settings, the benefits they offer, and the challenges that need to be addressed as we move toward a more
                AI-enhanced learning environment.
              </p>
              <div>
                <Button className="solid-red transition-transform duration-300 hover:scale-105">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost

