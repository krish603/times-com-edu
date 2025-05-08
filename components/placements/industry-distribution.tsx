"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const industryData = [
  {
    name: "Software Development",
    value: 35,
    color: "#ef4444",
  },
  {
    name: "Data Science & AI",
    value: 25,
    color: "#000000",
  },
  {
    name: "Cybersecurity",
    value: 15,
    color: "#6b7280",
  },
  {
    name: "Cloud Computing",
    value: 12,
    color: "#f97316",
  },
  {
    name: "UI/UX Design",
    value: 8,
    color: "#8b5cf6",
  },
  {
    name: "Others",
    value: 5,
    color: "#0ea5e9",
  },
]

const salaryData = [
  {
    name: "₹5-10 LPA",
    value: 30,
    color: "#6b7280",
  },
  {
    name: "₹10-15 LPA",
    value: 35,
    color: "#f97316",
  },
  {
    name: "₹15-20 LPA",
    value: 20,
    color: "#ef4444",
  },
  {
    name: "₹20-25 LPA",
    value: 10,
    color: "#8b5cf6",
  },
  {
    name: "₹25+ LPA",
    value: 5,
    color: "#000000",
  },
]

const locationData = [
  {
    name: "Bangalore",
    value: 30,
    color: "#ef4444",
  },
  {
    name: "Delhi NCR",
    value: 25,
    color: "#000000",
  },
  {
    name: "Mumbai",
    value: 20,
    color: "#f97316",
  },
  {
    name: "Hyderabad",
    value: 15,
    color: "#8b5cf6",
  },
  {
    name: "Pune",
    value: 7,
    color: "#0ea5e9",
  },
  {
    name: "Others",
    value: 3,
    color: "#6b7280",
  },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

const IndustryDistribution = () => {
  const [activeTab, setActiveTab] = useState("industry")

  const getActiveData = () => {
    switch (activeTab) {
      case "industry":
        return industryData
      case "salary":
        return salaryData
      case "location":
        return locationData
      default:
        return industryData
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Placement <span className="gradient-text">Distribution</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students are placed across various industries, salary brackets, and locations. Explore the distribution
            to understand the opportunities available.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="industry" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="industry">By Industry</TabsTrigger>
                <TabsTrigger value="salary">By Salary</TabsTrigger>
                <TabsTrigger value="location">By Location</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="industry" className="mt-0">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center text-gray-900">
                  Industry-wise Placement Distribution
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={industryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {industryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="salary" className="mt-0">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Salary-wise Placement Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={salaryData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {salaryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="location" className="mt-0">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center text-gray-900">
                  Location-wise Placement Distribution
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={locationData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {locationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default IndustryDistribution

