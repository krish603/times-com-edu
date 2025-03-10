import { Target, Users, BookOpen, Award, Heart, Lightbulb } from "lucide-react"

const values = [
  {
    icon: <Target className="h-10 w-10 text-red-600" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from curriculum development to teaching methodologies.",
  },
  {
    icon: <Users className="h-10 w-10 text-red-600" />,
    title: "Student-Centered",
    description: "Our students are at the heart of our institution. We focus on their growth, needs, and success.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-red-600" />,
    title: "Continuous Learning",
    description: "We believe in lifelong learning and constantly update our knowledge and teaching practices.",
  },
  {
    icon: <Award className="h-10 w-10 text-red-600" />,
    title: "Quality",
    description: "We maintain high standards in our education, facilities, and services to ensure quality outcomes.",
  },
  {
    icon: <Heart className="h-10 w-10 text-red-600" />,
    title: "Passion",
    description:
      "We are passionate about technology education and inspiring the next generation of tech professionals.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-red-600" />,
    title: "Innovation",
    description: "We embrace innovation in our teaching methods and encourage creative thinking in our students.",
  },
]

const Values = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values guide our approach to education and shape our institute's culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="mb-6 p-3 bg-gray-100 rounded-lg inline-block">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values

