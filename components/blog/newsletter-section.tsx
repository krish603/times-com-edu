import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Mail className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Stay updated with our latest articles, tech news, and exclusive content. We'll send you the best insights
              directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 h-auto">Subscribe</Button>
            </div>
            <p className="text-white/70 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection

