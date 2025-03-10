const timelineEvents = [
  {
    year: "2005",
    title: "Foundation",
    description: "Times Computer Education was established with a vision to provide quality computer education.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    year: "2008",
    title: "Expansion",
    description: "Expanded our curriculum to include advanced programming courses and opened a second branch.",
    image: "https://images.unsplash.com/photo-1573495804664-b1c0849525af?q=80&w=1169&auto=format&fit=crop",
  },
  {
    year: "2012",
    title: "Industry Partnerships",
    description: "Formed strategic partnerships with leading tech companies to enhance placement opportunities.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1170&auto=format&fit=crop",
  },
  {
    year: "2015",
    title: "10 Year Anniversary",
    description: "Celebrated 10 years of excellence with the launch of specialized courses in data science and AI.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop",
  },
  {
    year: "2018",
    title: "Digital Transformation",
    description: "Introduced online learning platforms and virtual classrooms to reach students globally.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1170&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Innovation Hub",
    description: "Launched an innovation hub for students to work on real-world projects and startups.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop",
  },
]

const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to becoming a leading computer education institute, here's a look at our journey
            through the years.
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 p-4">
                  <div
                    className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full font-bold text-lg">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold ml-4 text-gray-900">{event.title}</h3>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-4 hidden md:block">
                  <div
                    className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                  >
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                {/* Mobile image */}
                <div className="w-full p-4 md:hidden">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

