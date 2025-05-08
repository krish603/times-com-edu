import CoursesCategoryHero from "@/components/courses/courses-category-hero"
import CoursesList from "@/components/courses/courses-list"
import CourseSearch from "@/components/courses/course-search"
import CtaSection from "@/components/cta-section"

const careerCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Career",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
    instructor: "John Smith",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    duration: "8 weeks",
    students: "1.2k",
    level: "Beginner",
    price: "$299",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    fullDescription:
      "This comprehensive course covers everything you need to know to get started with web development. You'll learn HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll be able to build responsive websites from scratch and have a solid foundation for more advanced web development topics.",
    curriculum: [
      "Introduction to Web Development",
      "HTML Fundamentals",
      "CSS Styling and Layout",
      "JavaScript Basics",
      "DOM Manipulation",
      "Responsive Design",
      "Web Accessibility",
      "Final Project: Building a Complete Website",
    ],
    outcomes: [
      "Build responsive websites from scratch",
      "Understand core web technologies",
      "Create interactive web elements",
      "Implement modern design principles",
      "Debug and troubleshoot web applications",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    category: "Career",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1170&auto=format&fit=crop",
    instructor: "Sarah Williams",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "780",
    level: "Intermediate",
    price: "$349",
    description: "Learn to build native mobile applications for iOS and Android platforms.",
    fullDescription:
      "This course will teach you how to develop mobile applications for both iOS and Android platforms using React Native. You'll learn component-based architecture, state management, navigation, and how to interact with device features. By the end of the course, you'll be able to build and deploy fully functional mobile apps to app stores.",
    curriculum: [
      "Introduction to Mobile Development",
      "React Native Fundamentals",
      "UI Components and Styling",
      "Navigation and Routing",
      "State Management",
      "API Integration",
      "Device Features and Permissions",
      "Final Project: Complete Mobile Application",
    ],
    outcomes: [
      "Build cross-platform mobile applications",
      "Implement responsive mobile UI designs",
      "Manage application state effectively",
      "Integrate with backend services",
      "Deploy applications to app stores",
    ],
  },
  {
    id: 3,
    title: "Graphic Design for Beginners",
    category: "Career",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop",
    instructor: "Michael Lee",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "6 weeks",
    students: "950",
    level: "Beginner",
    price: "$249",
    description: "Master the fundamentals of graphic design and visual communication.",
    fullDescription:
      "This course introduces you to the world of graphic design. You'll learn design principles, color theory, typography, and how to use industry-standard tools like Adobe Photoshop and Illustrator. Through hands-on projects, you'll develop a portfolio of work that demonstrates your design skills.",
    curriculum: [
      "Design Principles and Elements",
      "Color Theory and Psychology",
      "Typography Fundamentals",
      "Layout and Composition",
      "Adobe Photoshop Essentials",
      "Adobe Illustrator Basics",
      "Logo and Brand Design",
      "Final Project: Brand Identity Package",
    ],
    outcomes: [
      "Create professional graphic designs",
      "Understand design principles and color theory",
      "Use Adobe Photoshop and Illustrator effectively",
      "Develop a portfolio of design work",
      "Apply visual communication principles",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Fundamentals",
    category: "Career",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    instructor: "Jessica Chen",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    duration: "8 weeks",
    students: "1.1k",
    level: "Beginner",
    price: "$299",
    description: "Learn essential digital marketing strategies and tools to promote businesses online.",
    fullDescription:
      "This comprehensive digital marketing course covers all the essential aspects of online marketing. You'll learn about SEO, social media marketing, email campaigns, content marketing, and paid advertising. By the end of the course, you'll be able to create and implement effective digital marketing strategies.",
    curriculum: [
      "Digital Marketing Overview",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Content Marketing Strategies",
      "Pay-Per-Click Advertising",
      "Analytics and Performance Tracking",
      "Final Project: Digital Marketing Campaign",
    ],
    outcomes: [
      "Create comprehensive digital marketing strategies",
      "Optimize websites for search engines",
      "Develop effective social media campaigns",
      "Design engaging email marketing sequences",
      "Analyze marketing performance with analytics tools",
    ],
  },
  {
    id: 5,
    title: "Computer Networking Basics",
    category: "Career",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop",
    instructor: "Robert Johnson",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    duration: "8 weeks",
    students: "720",
    level: "Beginner",
    price: "$279",
    description: "Learn the fundamentals of computer networking and network administration.",
    fullDescription:
      "This course provides a comprehensive introduction to computer networking concepts and practices. You'll learn about network architectures, protocols, IP addressing, routing, and network security. Through hands-on labs, you'll gain practical experience configuring and troubleshooting networks.",
    curriculum: [
      "Networking Fundamentals",
      "OSI and TCP/IP Models",
      "IP Addressing and Subnetting",
      "Network Devices and Cabling",
      "Routing and Switching Basics",
      "Wireless Networking",
      "Network Security Fundamentals",
      "Final Project: Network Design and Implementation",
    ],
    outcomes: [
      "Understand core networking concepts",
      "Configure basic network devices",
      "Implement IP addressing schemes",
      "Troubleshoot common network issues",
      "Apply basic network security measures",
    ],
  },
  {
    id: 6,
    title: "Database Management Essentials",
    category: "Career",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=1170&auto=format&fit=crop",
    instructor: "David Wilson",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    duration: "7 weeks",
    students: "680",
    level: "Beginner",
    price: "$269",
    description: "Learn database design, SQL, and database management system fundamentals.",
    fullDescription:
      "This course covers the essential concepts and skills needed for database management. You'll learn database design principles, SQL programming, and how to work with popular database management systems. Through practical exercises, you'll develop the ability to create, query, and maintain databases effectively.",
    curriculum: [
      "Database Concepts and Architecture",
      "Entity-Relationship Modeling",
      "Relational Database Design",
      "SQL Fundamentals",
      "Advanced SQL Queries",
      "Database Administration Basics",
      "Database Security",
      "Final Project: Database Design and Implementation",
    ],
    outcomes: [
      "Design efficient database structures",
      "Write complex SQL queries",
      "Implement database security measures",
      "Perform basic database administration tasks",
      "Optimize database performance",
    ],
  },
]

export default function CareerCoursesPage() {
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
        title="Career Courses"
        description="Comprehensive programs designed to prepare you for a successful career in the tech industry. These courses provide a solid foundation of skills and knowledge needed to start your professional journey."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop"
      />
      <CourseSearch />
      <CoursesList courses={careerCourses} />
      <CtaSection />
    </main>
  )
}

