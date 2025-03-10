import { Monitor, Code, Database, Cpu, Users, Award } from "lucide-react"

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-red-600" />,
    title: "Interactive Learning",
    description: "Engage with our interactive learning platform designed to make complex concepts easy to understand.",
  },
  {
    icon: <Code className="h-10 w-10 text-red-600" />,
    title: "Practical Projects",
    description: "Apply your knowledge through hands-on projects that simulate real-world scenarios.",
  },
  {
    icon: <Database className="h-10 w-10 text-red-600" />,
    title: "Comprehensive Curriculum",
    description: "Our curriculum covers everything from basic concepts to advanced techniques in computer science.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-red-600" />,
    title: "Cutting-Edge Technology",
    description: "Learn on the latest hardware and software to stay ahead in the rapidly evolving tech industry.",
  },
  {
    icon: <Users className="h-10 w-10 text-red-600" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in their respective fields.",
  },
  {
    icon: <Award className="h-10 w-10 text-red-600" />,
    title: "Recognized Certification",
    description: "Earn certificates that are recognized by leading tech companies and institutions.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose <span className="gradient-text">TCE</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive learning experience with features designed to help you succeed in the tech
            industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="mb-6 p-3 bg-gray-100 rounded-lg inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

