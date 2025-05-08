import { Phone, Mail, Clock } from "lucide-react"

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Connect With <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're available through multiple channels to answer your questions and provide support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
            <p className="text-gray-600 mb-2">General Inquiries</p>
            <a href="tel:+919876543210" className="text-red-600 font-medium hover:underline">
              +91 98765 43210
            </a>
            <p className="text-gray-600 mt-2 mb-2">Admissions</p>
            <a href="tel:+919876543211" className="text-red-600 font-medium hover:underline">
              +91 98765 43211
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
            <p className="text-gray-600 mb-2">General Inquiries</p>
            <a href="mailto:info@timesedu.com" className="text-red-600 font-medium hover:underline">
              info@timesedu.com
            </a>
            <p className="text-gray-600 mt-2 mb-2">Admissions</p>
            <a href="mailto:admissions@timesedu.com" className="text-red-600 font-medium hover:underline">
              admissions@timesedu.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Working Hours</h3>
            <p className="text-gray-600 mb-2">Monday - Friday</p>
            <p className="text-red-600 font-medium">9:00 AM - 7:00 PM</p>
            <p className="text-gray-600 mt-2 mb-2">Saturday</p>
            <p className="text-red-600 font-medium">9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
