import CoursesCategoryHero from "@/components/courses/courses-category-hero"
import CoursesList from "@/components/courses/courses-list"
import CourseSearch from "@/components/courses/course-search"
import CtaSection from "@/components/cta-section"

const advancedCourses = [
  {
    id: 1,
    title: "Cybersecurity Essentials",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2400&auto=format&fit=crop",
    instructor: "Michael Chen",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "950",
    level: "Intermediate",
    price: "$399",
    description: "Learn essential cybersecurity concepts and techniques to protect digital assets.",
    fullDescription:
      "This comprehensive cybersecurity course will teach you how to identify and mitigate security threats. You'll learn about network security, encryption, ethical hacking, and security best practices. Through hands-on labs and real-world scenarios, you'll develop the skills needed to protect organizations from cyber attacks.",
    curriculum: [
      "Introduction to Cybersecurity",
      "Network Security Fundamentals",
      "Cryptography and Encryption",
      "Vulnerability Assessment",
      "Ethical Hacking Techniques",
      "Security Incident Response",
      "Security Policies and Compliance",
      "Final Project: Security Audit and Implementation",
    ],
    outcomes: [
      "Identify and mitigate security vulnerabilities",
      "Implement effective security controls",
      "Conduct basic security assessments",
      "Respond to security incidents",
      "Develop security policies and procedures",
    ],
  },
  {
    id: 2,
    title: "Artificial Intelligence and Machine Learning",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1170&auto=format&fit=crop",
    instructor: "Sarah Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    duration: "14 weeks",
    students: "820",
    level: "Advanced",
    price: "$599",
    description: "Master advanced AI and machine learning techniques for solving complex problems.",
    fullDescription:
      "This advanced course covers cutting-edge AI and machine learning concepts and techniques. You'll learn about neural networks, deep learning, reinforcement learning, and natural language processing. Through hands-on projects, you'll develop the skills to build and deploy sophisticated AI systems that can solve real-world problems.",
    curriculum: [
      "Machine Learning Fundamentals",
      "Neural Networks and Deep Learning",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Reinforcement Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Final Project: End-to-End AI Solution",
    ],
    outcomes: [
      "Design and implement advanced machine learning models",
      "Apply deep learning techniques to complex problems",
      "Build natural language processing systems",
      "Develop computer vision applications",
      "Deploy AI solutions in production environments",
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1332&auto=format&fit=crop",
    instructor: "David Wilson",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "680",
    level: "Advanced",
    price: "$549",
    description: "Learn to develop blockchain applications and smart contracts for various industries.",
    fullDescription:
      "This course provides a deep dive into blockchain technology and development. You'll learn about blockchain architecture, consensus mechanisms, and smart contract development. Through hands-on projects, you'll gain experience building decentralized applications (dApps) and implementing blockchain solutions for real-world use cases.",
    curriculum: [
      "Blockchain Fundamentals",
      "Cryptography and Consensus Mechanisms",
      "Ethereum Development",
      "Solidity Programming",
      "Smart Contract Development",
      "Decentralized Application (dApp) Architecture",
      "Blockchain Security",
      "Final Project: Blockchain-Based Solution",
    ],
    outcomes: [
      "Develop smart contracts using Solidity",
      "Build decentralized applications (dApps)",
      "Implement blockchain solutions for business problems",
      "Secure blockchain applications",
      "Evaluate blockchain platforms for specific use cases",
    ],
  },
  {
    id: 4,
    title: "Cloud Security and Compliance",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1034&auto=format&fit=crop",
    instructor: "Jessica Chen",
    instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    duration: "10 weeks",
    students: "720",
    level: "Advanced",
    price: "$499",
    description: "Master cloud security principles, tools, and compliance frameworks.",
    fullDescription:
      "This advanced course focuses on securing cloud environments and ensuring compliance with regulatory requirements. You'll learn about cloud security architecture, identity and access management, data protection, and security automation. Through hands-on labs, you'll develop the skills to implement comprehensive security controls in cloud environments.",
    curriculum: [
      "Cloud Security Fundamentals",
      "Identity and Access Management",
      "Data Protection in the Cloud",
      "Network Security for Cloud",
      "Security Automation and Orchestration",
      "Compliance Frameworks (GDPR, HIPAA, PCI DSS)",
      "Cloud Security Monitoring and Incident Response",
      "Final Project: Secure Cloud Architecture",
    ],
    outcomes: [
      "Design secure cloud architectures",
      "Implement identity and access management controls",
      "Protect sensitive data in cloud environments",
      "Automate security processes in the cloud",
      "Ensure compliance with regulatory requirements",
    ],
  },
  {
    id: 5,
    title: "Big Data Analytics",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    instructor: "Robert Johnson",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "750",
    level: "Advanced",
    price: "$549",
    description: "Learn to process, analyze, and visualize large datasets using big data technologies.",
    fullDescription:
      "This advanced course covers the tools and techniques needed to work with big data. You'll learn about distributed computing frameworks, data processing pipelines, and advanced analytics. Through hands-on projects with real-world datasets, you'll develop the skills to extract valuable insights from massive amounts of data.",
    curriculum: [
      "Big Data Fundamentals",
      "Hadoop Ecosystem",
      "Apache Spark",
      "Data Processing with MapReduce",
      "NoSQL Databases",
      "Data Warehousing",
      "Advanced Analytics and Visualization",
      "Final Project: Big Data Analytics Solution",
    ],
    outcomes: [
      "Process and analyze large datasets",
      "Implement distributed computing solutions",
      "Work with NoSQL databases",
      "Create data processing pipelines",
      "Visualize insights from big data",
    ],
  },
  {
    id: 6,
    title: "IoT Development and Architecture",
    category: "Advanced",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1170&auto=format&fit=crop",
    instructor: "Michael Lee",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    duration: "12 weeks",
    students: "680",
    level: "Advanced",
    price: "$529",
    description: "Master Internet of Things (IoT) development, architecture, and security.",
    fullDescription:
      "This course provides a comprehensive understanding of IoT technologies and development. You'll learn about IoT architecture, hardware components, connectivity options, and cloud integration. Through hands-on projects, you'll develop the skills to build end-to-end IoT solutions that collect, process, and analyze data from connected devices.",
    curriculum: [
      "IoT Fundamentals and Architecture",
      "Embedded Systems Programming",
      "Sensor Integration",
      "Connectivity Protocols (MQTT, CoAP)",
      "Edge Computing",
      "Cloud Integration for IoT",
      "IoT Security",
      "Final Project: End-to-End IoT Solution",
    ],
    outcomes: [
      "Design and implement IoT architectures",
      "Program embedded systems for IoT",
      "Integrate sensors and actuators",
      "Implement secure IoT communication",
      "Build cloud-connected IoT solutions",
    ],
  },
]

export default function AdvancedCoursesPage() {
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
        title="Advanced Courses"
        description="Cutting-edge courses covering the latest technologies and advanced concepts for tech enthusiasts. These programs are designed for those looking to master specialized areas and stay ahead of industry trends."
        image="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1170&auto=format&fit=crop"
      />
      <CourseSearch />
      <CoursesList courses={advancedCourses} />
      <CtaSection />
    </main>
  )
}

