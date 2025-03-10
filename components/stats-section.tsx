import { Users, BookOpen, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-10 w-10 text-red-600" />,
    value: "10,000+",
    label: "Students",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-red-600" />,
    value: "50+",
    label: "Courses",
  },
  {
    icon: <Award className="h-10 w-10 text-red-600" />,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: <Clock className="h-10 w-10 text-red-600" />,
    value: "24/7",
    label: "Support",
  },
]

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

