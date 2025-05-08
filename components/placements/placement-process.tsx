import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Career Counseling",
    description:
      "Our career counselors help you identify your strengths and career goals to guide you toward the right path.",
  },
  {
    number: "02",
    title: "Skill Development",
    description:
      "Through our industry-aligned curriculum, you'll develop the technical and soft skills needed for your chosen career.",
  },
  {
    number: "03",
    title: "Resume Building",
    description:
      "Our experts help you create a professional resume that highlights your skills and projects effectively.",
  },
  {
    number: "04",
    title: "Interview Preparation",
    description:
      "Participate in mock interviews and receive feedback to improve your performance in actual interviews.",
  },
  {
    number: "05",
    title: "Placement Drives",
    description:
      "We organize regular placement drives with our partner companies, giving you direct access to job opportunities.",
  },
  {
    number: "06",
    title: "Job Placement",
    description:
      "Our placement team works tirelessly to match you with suitable job openings and help you secure offers.",
  },
]

const PlacementProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Placement <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to ensure our students are well-prepared for the job market and can secure
            the best opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full font-bold text-lg mr-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{step.title}</h3>
              </div>
              <p className="text-gray-600 ml-16">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Placement Guarantee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-6">
                We're so confident in our training and placement process that we offer a placement guarantee for
                eligible students. If you maintain good attendance, complete all assignments, and actively participate
                in placement activities, we guarantee to help you secure a job within 6 months of course completion.
              </p>
              <ul className="space-y-3">
                {[
                  "100% placement assistance for all students",
                  "Money-back guarantee for eligible candidates",
                  "Lifetime access to our placement services",
                  "Career guidance even after placement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1170&auto=format&fit=crop"
                alt="Placement Guarantee"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlacementProcess

