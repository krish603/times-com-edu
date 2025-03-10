import { Search } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Web Development", count: 12 },
  { name: "Data Science", count: 8 },
  { name: "Cybersecurity", count: 6 },
  { name: "Machine Learning", count: 9 },
  { name: "Career Advice", count: 5 },
  { name: "Technology Trends", count: 7 },
  { name: "IoT", count: 4 },
]

const popularPosts = [
  {
    id: 1,
    title: "The Future of AI in Education: Transforming Learning Experiences",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Getting Started with Web Development: A Beginner's Guide",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2025",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=150&auto=format&fit=crop",
  },
]

const tags = [
  "Web Development",
  "JavaScript",
  "Python",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "React",
  "Node.js",
  "Career",
  "Education",
  "Technology",
  "AI",
  "IoT",
  "Mobile Development",
]

const BlogSidebar = () => {
  return (
    <div className="space-y-10">
      {/* Search */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex justify-between items-center py-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="flex gap-4">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h4>
                <p className="text-sm text-gray-600 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-red-600 hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSidebar

