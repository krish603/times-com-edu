const companies = [
  {
    name: "Microsoft",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Tech Giant",
  },
  {
    name: "Google",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Tech Giant",
  },
  {
    name: "Amazon",
    logo: "/placeholder.svg?height=80&width=160",
    category: "E-commerce & Tech",
  },
  {
    name: "IBM",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Technology",
  },
  {
    name: "Infosys",
    logo: "/placeholder.svg?height=80&width=160",
    category: "IT Services",
  },
  {
    name: "TCS",
    logo: "/placeholder.svg?height=80&width=160",
    category: "IT Services",
  },
  {
    name: "Wipro",
    logo: "/placeholder.svg?height=80&width=160",
    category: "IT Services",
  },
  {
    name: "Accenture",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Consulting",
  },
  {
    name: "Cognizant",
    logo: "/placeholder.svg?height=80&width=160",
    category: "IT Services",
  },
  {
    name: "Deloitte",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Consulting",
  },
  {
    name: "Adobe",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Software",
  },
  {
    name: "Oracle",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Database & Cloud",
  },
]

const TopRecruiters = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Top <span className="gradient-text">Recruiters</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've built strong relationships with leading companies across industries who regularly hire our graduates.
            Here are some of our top recruiting partners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-16 w-auto object-contain mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopRecruiters

