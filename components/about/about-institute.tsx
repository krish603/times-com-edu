const AboutInstitute = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Our Institute"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2005, Times Computer Education began with a simple mission: to provide quality computer
              education that prepares students for the real world. What started as a small institute with just two
              classrooms and three instructors has now grown into one of the region's premier technology education
              centers.
            </p>
            <p className="text-gray-600 mb-6">
              Over the past 18 years, we've continuously evolved our curriculum to keep pace with the rapidly changing
              technology landscape. From basic computer courses to advanced programming, data science, cybersecurity,
              and artificial intelligence, we've expanded our offerings to meet the growing demands of the industry.
            </p>
            <p className="text-gray-600 mb-6">
              Our institute is recognized for its practical approach to education, industry-relevant curriculum, and
              dedicated faculty who bring years of professional experience to the classroom. We take pride in our
              state-of-the-art facilities, which include modern computer labs, smart classrooms, and collaborative
              learning spaces.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-2">18+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-2">15,000+</h3>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-2">50+</h3>
                <p className="text-gray-600">Expert Instructors</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-2">98%</h3>
                <p className="text-gray-600">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInstitute

