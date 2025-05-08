"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react"

const branches = [
  {
    id: 1,
    name: "Main Campus - Surendranagar",
    address: "",
    phone: "+91 98258 99293",
    email: "info@timesedu.com",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6743772911!2d77.21760731508095!3d28.63997908241634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1647339458954!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Ahmedabad Branch",
    address: "456 Tech Park, Andheri East, Mumbai - 400069",
    phone: "+91 94266 21337",
    email: "info@timesedu.com",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9382754426243!2d72.85773731490132!3d19.11710478706454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c8c8a5a7a9%3A0x9eaf8c4c3a4a9b9!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647339458954!5m2!1sen!2sin",
  },
]

const BranchLocations = () => {
  const [openBranch, setOpenBranch] = useState(1)

  const toggleBranch = (id: number) => {
    setOpenBranch(id)
  }

  // Find the currently selected branch
  const selectedBranch = branches.find((branch) => branch.id === openBranch) || branches[0]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Our <span className="gradient-text">Branches</span>
      </h2>

      <div className="mb-8">
        <div className="w-full h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden">
          <iframe
            src={selectedBranch.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={`${selectedBranch.name} Map`}
            className="transition-opacity duration-300"
          ></iframe>
        </div>
      </div>

      <div className="space-y-4">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className={`border rounded-lg overflow-hidden transition-all duration-300 ${openBranch === branch.id ? "border-red-500 shadow-md" : "border-gray-200"}`}
          >
            <button
              className={`w-full flex justify-between items-center p-4 text-left ${openBranch === branch.id ? "bg-red-50" : "bg-white"}`}
              onClick={() => toggleBranch(branch.id)}
              aria-expanded={openBranch === branch.id}  
              aria-controls={`branch-content-${branch.id}`}
            >
              <div className="flex items-center">
                <MapPin className={`h-5 w-5 mr-2 ${openBranch === branch.id ? "text-red-600" : "text-gray-500"}`} />
                <span className={`font-medium ${openBranch === branch.id ? "text-red-600" : "text-gray-800"}`}>
                  {branch.name}
                </span>
              </div>
              {openBranch === branch.id ? (
                <ChevronUp className="h-5 w-5 text-red-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            <div
              id={`branch-content-${branch.id}`}
              className={`transition-all duration-300 overflow-hidden ${
                openBranch === branch.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-gray-700 hover:text-red-600 transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-gray-700 hover:text-red-600 transition-colors">
                      {branch.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{branch.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BranchLocations
