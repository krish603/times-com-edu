"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleCoursesMenu = () => {
    setIsCoursesOpen(!isCoursesOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Check if the link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-red-600">
            <img src="/logo.png" alt="Logo" className="h-16 mr-2" />
          </Link>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive("/") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center`}
            >
              About
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center ${isActive("/courses") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center`}
              ><Link href="/courses">
                Courses{" "}
                {/* <ChevronDown className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" /> */}
              </Link>
              </button>
              <div className="absolute left-0 mt-0 pt-5 w-48 transform origin-top transition-all duration-300 opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100">
                <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                  <Link
                    href="/courses/career"
                    className={`block px-4 py-2 text-sm ${isActive("/courses/career") ? "text-red-600 bg-gray-50 font-medium" : "text-gray-700"} hover:bg-gray-100 hover:text-red-600 transition-colors duration-300`}
                  >
                    Career
                  </Link>
                  <Link
                    href="/courses/professional"
                    className={`block px-4 py-2 text-sm ${isActive("/courses/professional") ? "text-red-600 bg-gray-50 font-medium" : "text-gray-700"} hover:bg-gray-100 hover:text-red-600 transition-colors duration-300`}
                  >
                    Professional
                  </Link>
                  <Link
                    href="/courses/advanced"
                    className={`block px-4 py-2 text-sm ${isActive("/courses/advanced") ? "text-red-600 bg-gray-50 font-medium" : "text-gray-700"} hover:bg-gray-100 hover:text-red-600 transition-colors duration-300`}
                  >
                    Advanced
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className={`${isActive("/blog") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center`}
            >
              Placments
            </Link>
            <Link
              href="/gallery"
              className={`${isActive("/gallery") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Log In
            </Button> */}
            <Button className="solid-red text-white transition-all duration-300 hover:scale-105">Enroll Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-red-600 transition-colors duration-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-accordion-down">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${isActive("/") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${isActive("/about") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300`}
              >
                About
              </Link>
              <div>
                <button
                  onClick={toggleCoursesMenu}
                  className={`flex items-center ${isActive("/courses") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300`}
                ><Link href="/courses">
                  Courses{""}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-500 ${isCoursesOpen ? "rotate-180" : ""}`}
                  />
                  </Link>
                </button>
                {isCoursesOpen && (
                  <div className="mt-2 ml-4 space-y-2 animate-accordion-down">
                    <Link
                      href="/courses/career"
                      className={`block ${isActive("/courses/career") ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-600 transition-colors duration-300`}
                    >
                      Career
                    </Link>
                    <Link
                      href="/courses/professional"
                      className={`block ${isActive("/courses/professional") ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-600 transition-colors duration-300`}
                    >
                      Professional
                    </Link>
                    <Link
                      href="/courses/advanced"
                      className={`block ${isActive("/courses/advanced") ? "text-red-600 font-medium" : "text-gray-700"} hover:text-red-600 transition-colors duration-300`}
                    >
                      Advanced
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className={`${isActive("/blog") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300`}
              >
                Blog
              </Link>
              <Link
                href="/gallery"
                className={`${isActive("/gallery") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300`}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`${isActive("/contact") ? "text-red-600 font-medium" : "text-gray-800"} hover:text-red-600 transition-colors duration-300`}
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-2">
                {/* <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Log In
                </Button> */}
                <Button className="solid-red text-white transition-all duration-300 hover:scale-105">Enroll Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

