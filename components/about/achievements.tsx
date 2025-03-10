const achievements = [
  {
    title: "Best Computer Education Institute",
    organization: "Education Excellence Awards",
    year: "2022",
    description: "Recognized for outstanding contribution to computer education and student success.",
  },
  {
    title: "Innovation in Technology Education",
    organization: "TechEd Summit",
    year: "2021",
    description: "Awarded for innovative teaching methodologies and curriculum development.",
  },
  {
    title: "Top Placement Record",
    organization: "Industry Association of Technology Educators",
    year: "2020",
    description: "Achieved highest placement rate among computer education institutes in the region.",
  },
  {
    title: "Excellence in Online Education",
    organization: "Digital Learning Awards",
    year: "2019",
    description: "Recognized for successfully transitioning to high-quality online education.",
  },
]

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in the recognition we've received for our commitment to excellence in computer education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full font-bold text-lg">
                  {achievement.year}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                  <p className="text-red-600">{achievement.organization}</p>
                </div>
              </div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Certifications & Affiliations</h3>
            <p className="text-gray-600">We are proud to be certified and affiliated with these organizations</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=150&auto=format&fit=crop&${item}`}
                  alt={`Partner ${item}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

