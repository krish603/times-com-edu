import { Button } from "@/components/ui/button"

const BlogHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our <span className="text-red-500">Blog</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Stay updated with the latest trends, insights, and news from the world of technology and education. Our
            experts share valuable knowledge to help you stay ahead in your tech journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="solid-red px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
              Latest Articles
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero

