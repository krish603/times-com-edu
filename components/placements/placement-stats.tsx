import { Users, Building, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-10 w-10 text-red-600" />,
    value: "95%",
    label: "Placement Rate",
    description: "Of eligible students placed within 6 months of course completion",
  },
  {
    icon: <Building className="h-10 w-10 text-red-600" />,
    value: "250+",
    label: "Hiring Partners",
    description: "Leading companies actively recruiting our students",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-red-600" />,
    value: "40%",
    label: "Average Salary Increase",
    description: "For professionals upgrading their skills through our courses",
  },
  {
    icon: <Award className="h-10 w-10 text-red-600" />,
    value: "15+",
    label: "Years of Excellence",
    description: "Consistently delivering industry-ready professionals",
  },
]

const PlacementStats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Placement <span className="gradient-text">Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our track record of helping students launch successful careers in the tech industry. Our
            placement statistics speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg inline-block">{stat.icon}</div>
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-900">{stat.value}</h3>
              <h4 className="text-xl font-semibold mb-3 text-red-600">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlacementStats

