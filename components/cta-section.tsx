import { Button } from "@/components/ui/button"

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of students who have transformed their careers with our comprehensive computer education
              programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-red-600 text-white hover:bg-red-700 px-8 py-6 h-auto text-lg transition-transform duration-300 hover:scale-105">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-white/80 px-8 py-6 h-auto text-lg text-red-600 transition-transform duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

