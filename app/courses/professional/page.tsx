import CoursesCategoryHero from "@/components/courses/courses-category-hero"
import CoursesList from "@/components/courses/courses-list"
import CourseSearch from "@/components/courses/course-search"
import CtaSection from "@/components/cta-section"

const professionalCourses = [
  {
    id: 1,
    title: "Advanced Data Science",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    instructor: "Emily Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "850",
    level: "Advanced",
    price: "$499",
    description: "Master advanced data science techniques including machine learning and data visualization.",
    fullDescription:
      "Take your data science skills to the next level with this advanced course. You'll learn sophisticated machine learning algorithms, deep learning techniques, and advanced data visualization. This course includes hands-on projects with real-world datasets to give you practical experience solving complex data problems.",
    curriculum: [
      "Advanced Statistical Methods",
      "Machine Learning Algorithms",
      "Deep Learning Fundamentals",
      "Natural Language Processing",
      "Computer Vision",
      "Time Series Analysis",
      "Big Data Processing",
      "Final Project: End-to-End Data Science Solution",
    ],
    outcomes: [
      "Implement advanced machine learning models",
      "Process and analyze large datasets",
      "Create sophisticated data visualizations",
      "Deploy machine learning models to production",
      "Solve complex business problems with data",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop",
    instructor: "Michael Rodriguez",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    duration: "16 weeks",
    students: "920",
    level: "Intermediate",
    price: "$599",
    description: "Become a full-stack developer with expertise in both frontend and backend technologies.",
    fullDescription:
      "This comprehensive course covers all aspects of full-stack web development. You'll learn frontend technologies like React, backend frameworks like Node.js, database management, and deployment strategies. Through building complete web applications, you'll gain the skills needed to work as a professional full-stack developer.",
    curriculum: [
      "Frontend Development with React",
      "State Management with Redux",
      "Backend Development with Node.js",
      "RESTful API Design",
      "Database Integration (SQL and NoSQL)",
      "Authentication and Authorization",
      "Testing and Debugging",
      "Final Project: Full-Stack Web Application",
    ],
    outcomes: [
      "Build complete web applications from scratch",
      "Implement complex frontend interfaces with React",
      "Develop scalable backend services",
      "Design and integrate databases effectively",
      "Deploy applications to production environments",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineering",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1170&auto=format&fit=crop",
    instructor: "Sarah Chen",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    duration: "14 weeks",
    students: "780",
    level: "Intermediate",
    price: "$549",
    description: "Learn DevOps practices, tools, and methodologies for efficient software delivery.",
    fullDescription:
      "This course teaches you the principles and practices of DevOps engineering. You'll learn about continuous integration/continuous deployment (CI/CD), infrastructure as code, containerization, and cloud services. Through hands-on projects, you'll develop the skills to streamline software development and deployment processes.",
    curriculum: [
      "DevOps Principles and Practices",
      "Version Control with Git",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code with Terraform",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "Cloud Services (AWS, Azure, GCP)",
      "Final Project: DevOps Implementation",
    ],
    outcomes: [
      "Implement CI/CD pipelines",
      "Manage infrastructure as code",
      "Deploy applications using containers",
      "Orchestrate containerized applications",
      "Optimize software delivery processes",
    ],
  },
  {
    id: 4,
    title: "Cloud Computing and Architecture",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop",
    instructor: "David Wilson",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "720",
    level: "Intermediate",
    price: "$499",
    description: "Master cloud computing concepts, services, and architectural best practices.",
    fullDescription:
      "This course provides a comprehensive understanding of cloud computing technologies and architectural patterns. You'll learn about major cloud platforms, their services, and how to design scalable, resilient cloud solutions. Through practical exercises, you'll gain experience deploying and managing applications in the cloud.",
    curriculum: [
      "Cloud Computing Fundamentals",
      "AWS Core Services",
      "Azure Core Services",
      "Google Cloud Platform Basics",
      "Cloud Architecture Patterns",
      "Serverless Computing",
      "Cloud Security Best Practices",
      "Final Project: Cloud-Based Solution",
    ],
    outcomes: [
      "Design scalable cloud architectures",
      "Implement solutions across major cloud platforms",
      "Apply serverless computing concepts",
      "Secure cloud-based applications",
      "Optimize cloud resources and costs",
    ],
  },
  {
    id: 5,
    title: "UI/UX Design Professional",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1170&auto=format&fit=crop",
    instructor: "Jessica Lee",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "850",
    level: "Intermediate",
    price: "$449",
    description: "Learn professional UI/UX design methodologies, tools, and best practices.",
    fullDescription:
      "This course covers the entire UI/UX design process from research to implementation. You'll learn user research methods, wireframing, prototyping, and design systems. Using industry-standard tools like Figma and Adobe XD, you'll create user-centered designs that solve real-world problems.",
    curriculum: [
      "User Research and Personas",
      "Information Architecture",
      "Wireframing and Prototyping",
      "UI Design Principles",
      "Design Systems and Components",
      "Usability Testing",
      "Design Handoff to Developers",
      "Final Project: Complete UI/UX Design Process",
    ],
    outcomes: [
      "Conduct effective user research",
      "Create comprehensive wireframes and prototypes",
      "Design intuitive user interfaces",
      "Develop and maintain design systems",
      "Test and iterate designs based on user feedback",
    ],
  },
  {
    id: 6,
    title: "Project Management for IT",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop",
    instructor: "Robert Chen",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    duration: "8 weeks",
    students: "680",
    level: "Intermediate",
    price: "$399",
    description: "Master project management methodologies and tools for IT projects.",
    fullDescription:
      "This course teaches you how to effectively manage IT projects using both traditional and agile methodologies. You'll learn about project planning, team management, risk assessment, and quality control. Through case studies and a capstone project, you'll develop the skills to lead successful IT projects.",
    curriculum: [
      "Project Management Fundamentals",
      "Agile and Scrum Methodologies",
      "Project Planning and Scheduling",
      "Team Leadership and Communication",
      "Risk Management",
      "Quality Assurance",
      "Project Monitoring and Control",
      "Final Project: IT Project Management Plan",
    ],
    outcomes: [
      "Plan and execute IT projects effectively",
      "Apply agile methodologies to project management",
      "Manage project risks and resources",
      "Lead technical teams successfully",
      "Ensure project quality and timely delivery",
    ],
  },
]

export default function ProfessionalCoursesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden pt-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="floating-element w-32 h-32 bg-red-500 rounded-full top-[10%] left-[5%] animate-float"></div>
        <div className="floating-element w-24 h-24 bg-black rounded-full top-[20%] right-[10%] animate-float-reverse animate-delay-2"></div>
        <div className="floating-element w-40 h-40 bg-red-500 rounded-full bottom-[15%] left-[15%] animate-float animate-delay-3"></div>
        <div className="floating-element w-20 h-20 bg-black rounded-full bottom-[25%] right-[5%] animate-float-reverse animate-delay-1"></div>
        <div className="floating-element w-16 h-16 bg-red-500 rounded-full top-[40%] left-[30%] animate-float animate-delay-4"></div>
        <div className="floating-element w-28 h-28 bg-black rounded-full top-[60%] right-[25%] animate-float-reverse animate-delay-2"></div>
        <div className="floating-element w-36 h-36 border-4 border-red-500 rounded-full top-[70%] left-[50%] animate-spin-slow"></div>
        <div className="floating-element w-24 h-24 border-4 border-black rounded-full top-[30%] left-[70%] animate-spin-slow animate-delay-3"></div>
      </div>

      <CoursesCategoryHero
        title="Professional Courses"
        description="Specialized courses for working professionals looking to upgrade their skills and advance their careers. These programs focus on in-demand technologies and methodologies used in the industry today."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
      />
      <CourseSearch />
      <CoursesList courses={professionalCourses} />
      <CtaSection />
    </main>
  )
}

