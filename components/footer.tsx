import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text mb-6 inline-block">
              TechEdu
            </Link>
            <p className="text-gray-600 mb-6">
              Empowering individuals with the knowledge and skills needed to excel in the digital world through
              comprehensive computer education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-red-600 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-red-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/career" className="text-gray-600 hover:text-red-600 transition-colors">
                  Career Courses
                </Link>
              </li>
              <li>
                <Link href="/courses/professional" className="text-gray-600 hover:text-red-600 transition-colors">
                  Professional Courses
                </Link>
              </li>
              <li>
                <Link href="/courses/advanced" className="text-gray-600 hover:text-red-600 transition-colors">
                  Advanced Courses
                </Link>
              </li>
              <li>
                <Link href="/courses/web-development" className="text-gray-600 hover:text-red-600 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="text-gray-600 hover:text-red-600 transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses/cybersecurity" className="text-gray-600 hover:text-red-600 transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
                <span className="text-gray-600">123 Education Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-600">info@techedu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} TechEdu. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-red-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-red-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-600 hover:text-red-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

