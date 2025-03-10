import { CheckCircle } from "lucide-react"

const reasons = [
  "Industry-relevant curriculum updated regularly",
  "Experienced instructors with real-world expertise",
  "Hands-on practical training with real projects",
  "Flexible learning options (online, offline, hybrid)",
  "Career support and placement assistance",
  "State-of-the-art facilities and learning resources",
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="gradient-text">Our Courses</span>
            </h2>
            <p className="text-gray-600 mb-8">
              At Times Computer Education, we are committed to providing high-quality education that prepares you for
              real-world challenges. Our courses are designed with industry needs in mind, ensuring you gain relevant
              skills that employers are looking for.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-black/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop"
                  alt="Students learning"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Join 15,000+ students who have transformed their careers with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

