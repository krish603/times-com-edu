import CoursesCategoryHero from "@/components/courses/courses-category-hero"
import CoursesList from "@/components/courses/courses-list"
import CourseSearch from "@/components/courses/course-search"
import CtaSection from "@/components/cta-section"

const advancedCourses = [
  {
    "id": 1,
    "title": "Advanced Java (J2EE)",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2400&auto=format&fit=crop",
    "duration": "14 weeks",
    "students": "870",
    "level": "Advanced",
    "description": "Build enterprise-level Java web applications using Servlets, JSP, Spring, and Hibernate.",
    "fullDescription": "Advanced Java (J2EE) builds on Core Java to cover enterprise application development. You will learn Servlets, JSP, JDBC, Hibernate ORM, and the Spring Framework including Spring Boot and Spring MVC. The course culminates in a real-world project — a complete web-based enterprise application.",
    "curriculum": [
      "JDBC and Database Connectivity",
      "Servlets and JSP",
      "Hibernate ORM",
      "Spring Core and Dependency Injection",
      "Spring MVC",
      "Spring Boot and REST APIs",
      "Spring Security",
      "Microservices Basics",
      "Capstone: Enterprise Web Application"
    ],
    "outcomes": [
      "Develop enterprise-grade Java web apps",
      "Integrate Hibernate for database operations",
      "Build REST APIs with Spring Boot",
      "Implement security in Java applications",
      "Understand microservices architecture"
    ]
  },
  {
    "id": 2,
    "title": "Machine Learning & Artificial Intelligence",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2400&auto=format&fit=crop",
    "duration": "18 weeks",
    "students": "1.4k",
    "level": "Advanced",
    "description": "Deep dive into ML algorithms, neural networks, and AI applications with hands-on Python projects.",
    "fullDescription": "This advanced course covers supervised and unsupervised learning, deep learning with TensorFlow and Keras, natural language processing, and computer vision. You will implement algorithms from scratch and use cutting-edge libraries to solve real-world AI problems including image classification, text analysis, and recommendation systems.",
    "curriculum": [
      "ML Fundamentals and Linear Algebra Review",
      "Supervised Learning: Regression and Classification",
      "Unsupervised Learning: Clustering and PCA",
      "Deep Learning with TensorFlow/Keras",
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs) and LSTMs",
      "Natural Language Processing (NLP)",
      "Computer Vision Basics",
      "Model Deployment with Flask/FastAPI",
      "Capstone: AI-Powered Application"
    ],
    "outcomes": [
      "Implement core ML algorithms from scratch",
      "Build deep learning models with TensorFlow",
      "Apply NLP to text processing tasks",
      "Train and deploy image recognition models",
      "Deploy AI models as web services"
    ]
  },
  {
    "id": 3,
    "title": "SAP FICO",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=2400&auto=format&fit=crop",
    "duration": "14 weeks",
    "students": "580",
    "level": "Advanced",
    "description": "Master SAP Financial Accounting (FI) and Controlling (CO) modules for enterprise finance.",
    "fullDescription": "SAP FICO is the most critical financial module in SAP ERP systems. This course covers the complete FI module (general ledger, accounts payable, accounts receivable, asset accounting, bank accounting) and CO module (cost center accounting, profit center accounting, internal orders). Case studies from real SAP implementations are used.",
    "curriculum": [
      "SAP Overview and Navigation",
      "SAP FI: Organizational Structure",
      "General Ledger Accounting",
      "Accounts Payable and Receivable",
      "Asset Accounting",
      "Bank Accounting and Reconciliation",
      "SAP CO: Cost Center Accounting",
      "Profit Center and Internal Orders",
      "Integration of FI and CO",
      "Reports and Period-End Closing"
    ],
    "outcomes": [
      "Configure and use SAP FI module",
      "Manage accounts payable and receivable in SAP",
      "Perform asset and bank accounting",
      "Use SAP CO for cost control",
      "Execute period-end closing processes"
    ]
  },
  {
    "id": 4,
    "title": "Cyber Security and Ethical Hacking",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop",
    "duration": "16 weeks",
    "students": "1.0k",
    "level": "Intermediate",
    "description": "Learn ethical hacking, penetration testing, and network security to protect digital assets.",
    "fullDescription": "This course covers the fundamentals of cyber security and practical ethical hacking. Topics include penetration testing methodology, network scanning, vulnerability assessment, web application attacks (OWASP Top 10), social engineering, wireless security, and incident response. Tools include Kali Linux, Nmap, Metasploit, Burp Suite, and Wireshark.",
    "curriculum": [
      "Cyber Security Fundamentals",
      "Linux and Kali Linux Basics",
      "Network Scanning with Nmap",
      "Vulnerability Assessment",
      "Web Application Security (OWASP Top 10)",
      "Penetration Testing with Metasploit",
      "Wireless Network Security",
      "Social Engineering Techniques",
      "Incident Response and Forensics",
      "CEH Exam Preparation"
    ],
    "outcomes": [
      "Conduct penetration tests on networks and applications",
      "Identify and exploit common vulnerabilities",
      "Secure web applications against OWASP Top 10",
      "Perform wireless security audits",
      "Prepare for the CEH certification"
    ]
  },
  {
    "id": 5,
    "title": "AWS Cloud Computing",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "890",
    "level": "Intermediate",
    "description": "Learn Amazon Web Services to deploy, manage, and scale applications in the cloud.",
    "fullDescription": "This course covers core AWS services and prepares you for the AWS Certified Solutions Architect – Associate exam. Topics include EC2, S3, RDS, VPC, IAM, Lambda, CloudFormation, and monitoring with CloudWatch. Hands-on labs ensure real-world cloud experience.",
    "curriculum": [
      "Cloud Computing Concepts and AWS Overview",
      "AWS IAM: Users, Roles, and Policies",
      "EC2: Virtual Machines in the Cloud",
      "S3: Storage and Static Hosting",
      "RDS and DynamoDB: Managed Databases",
      "VPC: Networking in AWS",
      "Lambda: Serverless Computing",
      "CloudFormation: Infrastructure as Code",
      "Monitoring with CloudWatch",
      "AWS Certified Solutions Architect Exam Prep"
    ],
    "outcomes": [
      "Deploy and manage applications on AWS",
      "Design secure and scalable cloud architectures",
      "Work with AWS storage, compute, and database services",
      "Implement serverless solutions with Lambda",
      "Prepare for the AWS Solutions Architect certification"
    ]
  },
  {
    "id": 6,
    "title": "DevOps with Docker and Kubernetes",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1667372393086-b4534a25c4dc?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "620",
    "level": "Advanced",
    "description": "Learn DevOps practices, containerization with Docker, and orchestration with Kubernetes.",
    "fullDescription": "This course teaches modern DevOps practices including CI/CD pipelines, containerization with Docker, and container orchestration with Kubernetes. You will also cover Git workflows, Jenkins, Ansible for configuration management, and monitoring with Prometheus and Grafana. Real-world pipeline projects are a key part of the curriculum.",
    "curriculum": [
      "DevOps Culture and Principles",
      "Linux Administration for DevOps",
      "Git and GitHub Advanced Workflows",
      "Docker: Containers and Compose",
      "Kubernetes: Pods, Services, Deployments",
      "Helm Charts",
      "CI/CD with Jenkins and GitHub Actions",
      "Ansible for Configuration Management",
      "Monitoring with Prometheus and Grafana",
      "Capstone: Full CI/CD Pipeline Project"
    ],
    "outcomes": [
      "Build and manage Docker containers",
      "Orchestrate containers with Kubernetes",
      "Design CI/CD pipelines with Jenkins",
      "Automate infrastructure with Ansible",
      "Monitor production environments with Prometheus"
    ]
  },
  {
    "id": 7,
    "title": "Blockchain Development Fundamentals",
    "category": "Advanced",
    "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "430",
    "level": "Advanced",
    "description": "Understand blockchain architecture and build decentralized applications (dApps) with Solidity and Ethereum.",
    "fullDescription": "This course introduces blockchain technology and decentralized application development. You will learn about blockchain architecture, consensus mechanisms, Ethereum, Solidity smart contracts, Web3.js, and IPFS. Students build and deploy real dApps on Ethereum testnets as part of the course.",
    "curriculum": [
      "Blockchain Fundamentals and Cryptography",
      "Bitcoin and Ethereum Architecture",
      "Solidity Programming",
      "Smart Contract Development",
      "Truffle and Hardhat Frameworks",
      "Web3.js for Front-End Integration",
      "MetaMask and Wallets",
      "NFTs and Token Standards (ERC-20, ERC-721)",
      "IPFS for Decentralized Storage",
      "Deploying dApps to Mainnet"
    ],
    "outcomes": [
      "Write and deploy Solidity smart contracts",
      "Build decentralized applications (dApps)",
      "Integrate blockchain with web front-ends via Web3.js",
      "Create and deploy NFTs",
      "Understand blockchain security and best practices"
    ]
  }
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

