const teamMembers = [
  {
    name: "Dr. Robert Chen",
    role: "Founder & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
    bio: "With over 25 years of experience in technology education, Dr. Chen founded Times Computer Education with a vision to bridge the gap between academic learning and industry requirements.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Academic Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
    bio: "Sarah oversees our academic programs and curriculum development. She has a Ph.D. in Computer Science and previously worked as a senior developer at Microsoft.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Web Development",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop",
    bio: "Michael leads our web development department with expertise in full-stack development. He has helped hundreds of students launch successful careers in web development.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Emily Zhang",
    role: "Data Science Instructor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
    bio: "Emily is an expert in data science and machine learning with experience at Google and Amazon. She is passionate about making complex concepts accessible to students.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "David Wilson",
    role: "Cybersecurity Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    bio: "David brings 15 years of industry experience in cybersecurity to our institute. He has worked with government agencies and Fortune 500 companies on security protocols.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Student Success Manager",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=687&auto=format&fit=crop",
    bio: "Priya works closely with students to ensure they receive the support they need throughout their learning journey and helps with career placement after graduation.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  },
]

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced educators and industry professionals are dedicated to helping you succeed in your
            tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-red-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-red-600 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="text-gray-600 hover:text-red-600 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href={member.social.email} className="text-gray-600 hover:text-red-600 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

