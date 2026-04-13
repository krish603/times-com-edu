import CoursesCategoryHero from "@/components/courses/courses-category-hero"
import CoursesList from "@/components/courses/courses-list"
import CourseSearch from "@/components/courses/course-search"
import CtaSection from "@/components/cta-section"

const careerCourses = [
  {
    "id": 1,
    "title": "Web Development Fundamentals",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "1.2k",
    "level": "Beginner",
    "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    "fullDescription": "This comprehensive course covers everything you need to know to get started with web development. You'll learn HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll be able to build responsive websites from scratch and have a solid foundation for more advanced web development topics.",
    "curriculum": [
      "Introduction to Web Development",
      "HTML Fundamentals",
      "CSS Styling and Layout",
      "JavaScript Basics",
      "DOM Manipulation",
      "Responsive Design",
      "Web Accessibility",
      "Final Project: Building a Complete Website"
    ],
    "outcomes": [
      "Build responsive websites from scratch",
      "Understand core web technologies",
      "Create interactive web elements",
      "Implement modern design principles",
      "Debug and troubleshoot web applications"
    ]
  },
  {
    "id": 2,
    "title": "Front-End Development",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "980",
    "level": "Beginner",
    "description": "Build beautiful, responsive front-end interfaces using HTML, CSS, JavaScript, and React.",
    "fullDescription": "Focused entirely on the client side of the web, this course takes you from basic HTML to building dynamic React applications. You will cover CSS Flexbox, Grid, Bootstrap, and Tailwind, then move on to JavaScript and React component architecture. UI/UX principles and responsiveness are woven throughout.",
    "curriculum": [
      "HTML5 Semantic Markup",
      "Advanced CSS: Flexbox and Grid",
      "Bootstrap and Tailwind CSS",
      "JavaScript for the DOM",
      "Introduction to React",
      "React Component Lifecycle",
      "APIs and Fetch",
      "Responsive and Mobile-First Design",
      "Portfolio Project"
    ],
    "outcomes": [
      "Create pixel-perfect responsive layouts",
      "Build reusable React components",
      "Integrate third-party APIs",
      "Apply modern CSS frameworks",
      "Optimize for performance and accessibility"
    ]
  },
  {
    "id": 3,
    "title": "WordPress Website Development",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "1.5k",
    "level": "Beginner",
    "description": "Design and launch professional websites using WordPress without writing code from scratch.",
    "fullDescription": "Learn how to build and manage professional websites using WordPress, the world's most popular CMS. This course covers theme installation and customization, plugin usage, SEO basics, e-commerce with WooCommerce, and website security. Perfect for entrepreneurs, freelancers, and content creators.",
    "curriculum": [
      "Introduction to WordPress and CMS",
      "Installing and Configuring WordPress",
      "Themes and Page Builders (Elementor)",
      "Plugins: SEO, Contact Forms, Cache",
      "WooCommerce for E-Commerce",
      "Website Security and Backups",
      "Domain and Hosting Setup",
      "Final Project: Launch a Live Website"
    ],
    "outcomes": [
      "Build and launch professional WordPress websites",
      "Set up online stores with WooCommerce",
      "Optimize websites for search engines",
      "Manage plugins and themes effectively",
      "Secure and maintain WordPress sites"
    ]
  },
  {
    "id": 4,
    "title": "Python Programming",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "3.4k",
    "level": "Beginner",
    "description": "Learn Python from scratch — syntax, data structures, functions, and real-world scripting projects.",
    "fullDescription": "Python is one of the most versatile and in-demand programming languages today. This course starts from zero and builds up to writing automation scripts, working with files and APIs, and understanding object-oriented programming. You'll leave with a strong Python foundation applicable to data science, web development, and automation.",
    "curriculum": [
      "Python Setup and Syntax",
      "Variables, Data Types, and Operators",
      "Control Flow: Conditions and Loops",
      "Functions and Modules",
      "Lists, Tuples, Dictionaries, Sets",
      "File Handling and Exception Handling",
      "Object-Oriented Programming",
      "Working with Libraries: NumPy, Pandas",
      "Mini Projects: Automation Scripts"
    ],
    "outcomes": [
      "Write clean and efficient Python code",
      "Automate repetitive tasks",
      "Work with data using Pandas and NumPy",
      "Apply OOP concepts in Python",
      "Build command-line tools and scripts"
    ]
  },
  {
    "id": 5,
    "title": "Core Java Programming",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "2.0k",
    "level": "Beginner",
    "description": "Master the fundamentals of Java programming including OOP, collections, and exception handling.",
    "fullDescription": "This course provides a solid grounding in Core Java for beginners and professionals. Topics include Java syntax, object-oriented programming, inheritance, polymorphism, interfaces, exception handling, collections framework, and multithreading. You will build small Java applications as hands-on practice throughout.",
    "curriculum": [
      "Introduction to Java and JDK Setup",
      "Data Types, Variables, and Operators",
      "Control Statements and Loops",
      "Classes, Objects, and Constructors",
      "Inheritance and Polymorphism",
      "Interfaces and Abstract Classes",
      "Exception Handling",
      "Collections Framework",
      "Multithreading Basics",
      "File I/O in Java"
    ],
    "outcomes": [
      "Write structured and reusable Java programs",
      "Apply OOP principles effectively",
      "Handle exceptions gracefully",
      "Use Java Collections for data management",
      "Understand multithreading fundamentals"
    ]
  },
  {
    "id": 6,
    "title": "C and C++ Programming",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "1.1k",
    "level": "Beginner",
    "description": "Learn foundational programming with C and move into object-oriented programming with C++.",
    "fullDescription": "This course covers procedural programming with C and transitions into object-oriented programming with C++. Topics include pointers, memory management, data structures, file I/O, classes, inheritance, templates, and the STL. Ideal for students seeking a strong programming foundation or preparing for competitive exams.",
    "curriculum": [
      "Introduction to C Programming",
      "Pointers and Memory Management",
      "Arrays, Strings, and Structures",
      "File Handling in C",
      "Introduction to C++",
      "Classes and Objects",
      "Inheritance and Polymorphism",
      "Templates and STL",
      "Practice Problems and Assignments"
    ],
    "outcomes": [
      "Write efficient procedural programs in C",
      "Manage memory with pointers",
      "Apply OOP using C++",
      "Use the C++ Standard Template Library",
      "Solve algorithmic problems with confidence"
    ]
  },
  {
    "id": 7,
    "title": "Graphic Designing",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "2.2k",
    "level": "Beginner",
    "description": "Master professional graphic design using Adobe Photoshop, Illustrator, and CorelDRAW.",
    "fullDescription": "This course covers the core principles of graphic design and teaches industry-standard tools including Adobe Photoshop, Illustrator, and CorelDRAW. You will work on real-world projects such as logos, brochures, posters, social media graphics, and brand identity kits. Perfect for aspiring designers and marketing professionals.",
    "curriculum": [
      "Design Principles: Color, Typography, Layout",
      "Adobe Photoshop Essentials",
      "Photo Editing and Retouching",
      "Adobe Illustrator: Vector Graphics",
      "Logo Design and Branding",
      "CorelDRAW for Print Design",
      "Brochure and Poster Design",
      "Social Media Graphic Design",
      "Portfolio Development"
    ],
    "outcomes": [
      "Create professional logos and brand identities",
      "Design print and digital marketing materials",
      "Edit and retouch photos with Photoshop",
      "Create vector illustrations with Illustrator",
      "Build a strong design portfolio"
    ]
  },
  {
    "id": 8,
    "title": "UI/UX Design",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "1.3k",
    "level": "Beginner",
    "description": "Design intuitive and beautiful user interfaces with Figma and master UX research principles.",
    "fullDescription": "This course blends user experience (UX) research with user interface (UI) design skills. You will learn design thinking, wireframing, prototyping, usability testing, and create polished, interactive prototypes in Figma. The course covers mobile and web UI design with a strong emphasis on user-centered design methodologies.",
    "curriculum": [
      "Design Thinking and UX Process",
      "User Research and Personas",
      "Information Architecture and User Flows",
      "Wireframing: Low and High Fidelity",
      "Figma: Components, Auto Layout, Prototyping",
      "Visual Design: Typography and Color Systems",
      "Usability Testing and Iteration",
      "Responsive Design Principles",
      "Capstone: Complete App Design Case Study"
    ],
    "outcomes": [
      "Conduct UX research and user testing",
      "Design mobile and web UI in Figma",
      "Build interactive prototypes",
      "Apply design systems and component libraries",
      "Present design decisions with confidence"
    ]
  },
  {
    "id": 9,
    "title": "Video Editing (Adobe Premiere Pro & After Effects)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "870",
    "level": "Beginner",
    "description": "Edit professional videos and create stunning motion graphics with Premiere Pro and After Effects.",
    "fullDescription": "Learn professional video editing and motion graphics production. This course covers the full editing workflow in Adobe Premiere Pro — cuts, transitions, color grading, audio mixing, and export. After Effects is introduced for motion graphics, title animations, visual effects, and compositing. Students produce a showreel by the end.",
    "curriculum": [
      "Video Production Basics",
      "Adobe Premiere Pro Interface and Workflow",
      "Cuts, Transitions, and Pacing",
      "Color Correction and Grading",
      "Audio Editing and Mixing",
      "Introduction to After Effects",
      "Motion Graphics and Title Animations",
      "Visual Effects and Compositing",
      "Exporting for YouTube, Social Media, and TV"
    ],
    "outcomes": [
      "Edit professional-quality videos",
      "Create motion graphics and title sequences",
      "Perform color correction and grading",
      "Mix and master audio tracks",
      "Export videos for multiple platforms"
    ]
  },
  {
    "id": 10,
    "title": "DTP (Desktop Publishing)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "690",
    "level": "Beginner",
    "description": "Master print design and layout using Adobe InDesign, Photoshop, and CorelDRAW.",
    "fullDescription": "Desktop Publishing covers the design of print-ready materials for publication. You will use Adobe InDesign, Photoshop, and CorelDRAW to create brochures, newspapers, magazines, books, visiting cards, and marketing collateral. Typography, layout principles, and print production are central to the course.",
    "curriculum": [
      "Introduction to DTP and Print Design",
      "Typography and Color Theory",
      "Adobe Photoshop for DTP",
      "CorelDRAW Essentials",
      "Adobe InDesign: Layout and Typography",
      "Designing Brochures and Flyers",
      "Magazine and Book Layout",
      "Print Production and Preflight",
      "Portfolio of Print Materials"
    ],
    "outcomes": [
      "Design print-ready brochures and publications",
      "Apply professional typography principles",
      "Prepare files for commercial printing",
      "Create magazines and marketing materials",
      "Use industry-standard DTP tools confidently"
    ]
  },
  {
    "id": 11,
    "title": "Digital Marketing",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "3.0k",
    "level": "Beginner",
    "description": "Master SEO, social media marketing, Google Ads, content strategy, and email marketing.",
    "fullDescription": "This all-in-one digital marketing course prepares you for a career in online marketing or running your own business online. You will learn SEO, paid advertising (Google and Meta Ads), social media strategy, content marketing, email marketing, and web analytics. Live campaigns are run as part of the training.",
    "curriculum": [
      "Introduction to Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Google Ads and PPC Advertising",
      "Social Media Marketing (Facebook, Instagram, LinkedIn)",
      "Content Marketing Strategy",
      "Email Marketing and Automation",
      "Google Analytics and Reporting",
      "Affiliate Marketing Basics",
      "Capstone: Live Campaign Management"
    ],
    "outcomes": [
      "Rank websites on Google with SEO",
      "Run profitable Google and Meta ad campaigns",
      "Build and grow social media audiences",
      "Measure campaign performance with analytics",
      "Create content strategies for businesses"
    ]
  },
  {
    "id": 12,
    "title": "Search Engine Optimization (SEO)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "1.4k",
    "level": "Beginner",
    "description": "Learn on-page, off-page, and technical SEO to rank websites at the top of Google.",
    "fullDescription": "This focused SEO course covers everything from keyword research and on-page optimization to link building and technical SEO audits. You will use tools like Google Search Console, SEMrush, Ahrefs, and Screaming Frog. Local SEO and e-commerce SEO are also covered with practical exercises on real websites.",
    "curriculum": [
      "How Search Engines Work",
      "Keyword Research and Intent Analysis",
      "On-Page SEO: Title, Meta, Content Optimization",
      "Technical SEO: Site Speed, Schema, Indexing",
      "Link Building Strategies",
      "Local SEO and Google My Business",
      "SEO for E-Commerce",
      "Google Search Console and Analytics",
      "SEO Audit and Reporting"
    ],
    "outcomes": [
      "Perform professional keyword research",
      "Optimize websites for on-page SEO",
      "Build high-quality backlinks",
      "Conduct full technical SEO audits",
      "Track and report organic growth"
    ]
  },
  {
    "id": 13,
    "title": "Social Media Marketing",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "1.7k",
    "level": "Beginner",
    "description": "Grow brands and businesses on Instagram, Facebook, LinkedIn, and YouTube.",
    "fullDescription": "This course provides an end-to-end understanding of social media marketing across all major platforms. You will learn content creation, audience targeting, influencer marketing, community management, and paid social ads. Platform-specific strategies for Instagram, Facebook, LinkedIn, Twitter/X, and YouTube are covered in depth.",
    "curriculum": [
      "Social Media Strategy and Planning",
      "Content Creation and Calendars",
      "Instagram Marketing and Reels",
      "Facebook Pages and Groups",
      "LinkedIn for B2B Marketing",
      "YouTube Channel Growth",
      "Paid Social Advertising",
      "Influencer and Affiliate Marketing",
      "Analytics and ROI Measurement"
    ],
    "outcomes": [
      "Build a social media strategy for any business",
      "Create engaging content for multiple platforms",
      "Run paid social media ad campaigns",
      "Grow organic followings on key platforms",
      "Measure social media ROI effectively"
    ]
  },
  {
    "id": 14,
    "title": "Tally Prime with GST",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "4.1k",
    "level": "Beginner",
    "description": "Learn Tally Prime for complete business accounting, GST filing, and financial reporting.",
    "fullDescription": "This course provides complete practical training in Tally Prime, the most widely used accounting software in India. Topics include company creation, ledgers, voucher entry, accounts payable/receivable, bank reconciliation, GST configuration and returns, payroll, inventory management, and MIS reports.",
    "curriculum": [
      "Introduction to Accounting Concepts",
      "Tally Prime Setup and Company Creation",
      "Ledgers, Groups, and Voucher Entry",
      "Accounts Payable and Receivable",
      "Bank Reconciliation",
      "GST: Configuration, Invoicing, and Returns",
      "Inventory Management",
      "Payroll Processing",
      "MIS Reports and Financial Statements"
    ],
    "outcomes": [
      "Manage complete business accounts in Tally Prime",
      "File GST returns accurately",
      "Process payroll for a company",
      "Generate financial reports and statements",
      "Reconcile bank transactions efficiently"
    ]
  },
  {
    "id": 15,
    "title": "Manual Software Testing",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "1.3k",
    "level": "Beginner",
    "description": "Learn software testing fundamentals, test case writing, bug tracking, and SDLC/STLC concepts.",
    "fullDescription": "This foundational course covers the complete software testing lifecycle. You will learn testing types (unit, integration, system, UAT), test case design techniques, defect lifecycle management using JIRA, Agile testing, and API testing basics with Postman. Perfect for beginners entering the QA field.",
    "curriculum": [
      "Software Development Life Cycle (SDLC)",
      "Software Testing Life Cycle (STLC)",
      "Testing Types: Unit, Integration, System, UAT",
      "Test Case Design Techniques",
      "Defect Lifecycle and JIRA",
      "Test Planning and Test Reports",
      "Agile and Scrum for Testers",
      "API Testing with Postman",
      "Mock Interviews and Resume Building"
    ],
    "outcomes": [
      "Write comprehensive test cases and test plans",
      "Log and track defects using JIRA",
      "Perform functional and regression testing",
      "Test REST APIs using Postman",
      "Work effectively in Agile teams"
    ]
  },
  {
    "id": 16,
    "title": "Computer Hardware and Maintenance",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "1.1k",
    "level": "Beginner",
    "description": "Learn to assemble, troubleshoot, and maintain desktop and laptop computers.",
    "fullDescription": "This hands-on course covers PC hardware components, assembly, BIOS configuration, operating system installation, driver management, and common hardware troubleshooting. Chip-level basics and laptop servicing are also included. Ideal for those pursuing hardware technician or IT support roles.",
    "curriculum": [
      "PC Components and Architecture",
      "PC Assembly and Disassembly",
      "BIOS and UEFI Configuration",
      "Operating System Installation (Windows and Linux)",
      "Driver Installation and Management",
      "Preventive Maintenance",
      "Troubleshooting Common Hardware Faults",
      "Laptop Servicing Basics",
      "Chip-Level Repair Introduction"
    ],
    "outcomes": [
      "Assemble and configure a PC from components",
      "Install and configure operating systems",
      "Diagnose and fix common hardware problems",
      "Perform preventive maintenance",
      "Service laptops and replace hardware components"
    ]
  },
  {
    "id": 17,
    "title": "Networking Fundamentals (CompTIA N+)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "780",
    "level": "Beginner",
    "description": "Learn networking concepts, protocols, IP addressing, and network troubleshooting.",
    "fullDescription": "This course aligns with the CompTIA Network+ certification and covers OSI and TCP/IP models, IP addressing, subnetting, LAN/WAN technologies, wireless networking, network security basics, and network troubleshooting. Hands-on labs use Cisco Packet Tracer for network simulation.",
    "curriculum": [
      "OSI and TCP/IP Models",
      "IP Addressing and Subnetting",
      "LAN Technologies: Ethernet and Switching",
      "Routing Fundamentals",
      "WAN Technologies",
      "Wireless Networking (Wi-Fi)",
      "Network Security Basics",
      "Network Troubleshooting Tools",
      "Cisco Packet Tracer Labs",
      "CompTIA N+ Exam Preparation"
    ],
    "outcomes": [
      "Understand core networking protocols",
      "Design and subnet IP address schemes",
      "Configure basic routers and switches",
      "Troubleshoot common network issues",
      "Prepare for CompTIA Network+ certification"
    ]
  },
  {
    "id": 18,
    "title": "AutoCAD (2D and 3D)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "920",
    "level": "Beginner",
    "description": "Create precise 2D technical drawings and 3D models for engineering and architectural design.",
    "fullDescription": "AutoCAD is the industry standard for computer-aided design. This course covers the complete 2D drafting workflow — drawing tools, layers, dimensions, blocks, and plotting — before moving into 3D modelling, rendering, and solid modelling. Used by engineers, architects, and product designers.",
    "curriculum": [
      "AutoCAD Interface and Navigation",
      "2D Drawing Commands",
      "Layers, Linetypes, and Properties",
      "Dimensioning and Annotations",
      "Blocks and External References (XREFs)",
      "Plotting and Sheet Sets",
      "Introduction to 3D Modelling",
      "3D Solid Modelling and Editing",
      "Rendering and Visualization",
      "Project: Technical Drawing Set"
    ],
    "outcomes": [
      "Create accurate 2D engineering drawings",
      "Build 3D solid models in AutoCAD",
      "Annotate and dimension technical drawings",
      "Prepare and plot drawing sets",
      "Use AutoCAD in professional design projects"
    ]
  },
  {
    "id": 19,
    "title": "MS Office (Word, Excel, PowerPoint, Outlook)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2400&auto=format&fit=crop",
    "duration": "4 weeks",
    "students": "5.0k",
    "level": "Beginner",
    "description": "Master Microsoft Office tools for professional workplace productivity.",
    "fullDescription": "This practical course covers all four major MS Office applications: Word for document creation, Excel for data management and analysis, PowerPoint for professional presentations, and Outlook for email and calendar management. Designed for students, job seekers, and professionals looking to boost workplace productivity.",
    "curriculum": [
      "MS Word: Formatting, Tables, and Mail Merge",
      "MS Excel: Formulas, Charts, and Data Management",
      "MS PowerPoint: Slide Design and Presentations",
      "MS Outlook: Email, Calendar, and Contacts",
      "File Management and Cloud Storage (OneDrive)",
      "Productivity Tips and Keyboard Shortcuts",
      "Office 365 Collaboration Features",
      "Final Project: Complete Office Task Simulation"
    ],
    "outcomes": [
      "Create professional documents in MS Word",
      "Manage and analyze data in MS Excel",
      "Design compelling presentations in PowerPoint",
      "Manage emails and scheduling in Outlook",
      "Collaborate efficiently using Office 365"
    ]
  },
  {
    "id": 20,
    "title": "Computer Basics and Internet",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400&auto=format&fit=crop",
    "duration": "3 weeks",
    "students": "3.8k",
    "level": "Beginner",
    "description": "Get started with computers, operating systems, internet browsing, email, and digital safety.",
    "fullDescription": "This introductory course is perfect for complete beginners with no prior computer experience. You will learn how to use a computer, navigate Windows OS, manage files and folders, browse the internet safely, send emails, and use basic online tools. Digital literacy, online safety, and social media basics are also covered.",
    "curriculum": [
      "Introduction to Computers and Hardware",
      "Windows OS: Navigation and File Management",
      "Typing Skills and Keyboard Shortcuts",
      "Internet Browsing and Search Engines",
      "Email Setup and Management",
      "Online Safety and Privacy",
      "Introduction to Google Workspace",
      "Social Media Basics",
      "Digital Payments and e-Governance"
    ],
    "outcomes": [
      "Navigate a computer and Windows OS confidently",
      "Browse the internet and manage emails",
      "Manage files and folders effectively",
      "Stay safe online from threats and scams",
      "Use Google Docs, Drive, and basic online tools"
    ]
  },
  {
    "id": 21,
    "title": "CCC (Course on Computer Concepts)",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
    "duration": "3 months",
    "students": "6.2k",
    "level": "Beginner",
    "description": "Government-approved CCC certification course by NIELIT covering computer literacy essentials.",
    "fullDescription": "The CCC (Course on Computer Concepts) is a government-approved certification programme by NIELIT. It covers computer fundamentals, MS Office, internet and e-mail usage, and basic cyber security. Mandatory for many government job applications in India.",
    "curriculum": [
      "Introduction to Computers",
      "Introduction to GUI Operating Systems (Windows)",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Computer Communication and Internet",
      "WWW and Web Browsers",
      "Email Usage",
      "Digital Finance Applications",
      "CCC Exam Preparation and Mock Tests"
    ],
    "outcomes": [
      "Pass the NIELIT CCC examination",
      "Use MS Office for routine tasks",
      "Browse the web and manage emails",
      "Understand cyber safety practices",
      "Apply for government jobs requiring CCC certification"
    ]
  },
  {
    "id": 22,
    "title": "Generative AI and Prompt Engineering",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "2.8k",
    "level": "Beginner",
    "description": "Harness the power of generative AI tools including ChatGPT, Midjourney, and LLM APIs.",
    "fullDescription": "This practical course introduces generative AI, large language models, and effective prompt engineering. You will learn to use AI tools for content creation, code generation, image generation, and workflow automation. The course also covers building basic applications using the OpenAI API and integrating AI into business workflows.",
    "curriculum": [
      "Introduction to Generative AI and LLMs",
      "Prompt Engineering Fundamentals",
      "Advanced Prompting Techniques",
      "ChatGPT for Productivity and Content",
      "Image Generation with Midjourney and DALL·E",
      "OpenAI API Integration",
      "Building AI-Powered Applications",
      "AI Ethics and Responsible Use",
      "Use Cases: Marketing, Education, Business"
    ],
    "outcomes": [
      "Write effective prompts for various AI models",
      "Integrate LLM APIs into applications",
      "Automate workflows using AI tools",
      "Generate images and content with AI",
      "Understand AI ethics and limitations"
    ]
  },
  {
    "id": 23,
    "title": "Spoken English and Communication Skills",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "3.5k",
    "level": "Beginner",
    "description": "Build English fluency, public speaking, and professional communication skills for the workplace.",
    "fullDescription": "This course develops spoken English confidence and professional communication abilities. Topics include grammar fundamentals, vocabulary building, conversational practice, public speaking, email writing, group discussion techniques, and telephonic etiquette. Designed for students and professionals who want to communicate confidently in English.",
    "curriculum": [
      "English Grammar Essentials",
      "Vocabulary Building",
      "Conversational English Practice",
      "Pronunciation and Fluency",
      "Public Speaking and Presentation Skills",
      "Professional Email Writing",
      "Group Discussion Techniques",
      "Telephonic and Video Call Etiquette",
      "Mock Interviews in English"
    ],
    "outcomes": [
      "Speak English fluently in professional settings",
      "Deliver confident public speeches and presentations",
      "Write clear professional emails",
      "Participate effectively in group discussions",
      "Perform well in English-medium job interviews"
    ]
  },
  {
    "id": 24,
    "title": "Personality Development and Interview Skills",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "2.1k",
    "level": "Beginner",
    "description": "Develop a winning personality, leadership skills, and nail every job interview.",
    "fullDescription": "This transformative course combines personality development with practical career coaching. Topics include self-awareness, body language, emotional intelligence, leadership, time management, resume writing, and interview preparation. Mock interviews, role plays, and group activities make this a highly practical programme.",
    "curriculum": [
      "Self-Awareness and Goal Setting",
      "Body Language and Non-Verbal Communication",
      "Emotional Intelligence",
      "Leadership and Teamwork",
      "Time Management and Productivity",
      "Resume and LinkedIn Profile Building",
      "Interview Preparation and Mock Interviews",
      "Professional Etiquette and Grooming",
      "Personal Branding"
    ],
    "outcomes": [
      "Project confidence and positive body language",
      "Apply emotional intelligence in the workplace",
      "Write an ATS-friendly resume",
      "Perform excellently in job interviews",
      "Build a strong professional personal brand"
    ]
  },
  {
    "id": 25,
    "title": "Freelancing and Remote Work Skills",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2400&auto=format&fit=crop",
    "duration": "4 weeks",
    "students": "1.9k",
    "level": "Beginner",
    "description": "Launch your freelancing career on Upwork, Fiverr, and Toptal with proven strategies.",
    "fullDescription": "This practical course teaches you how to start and grow a freelancing career. Topics include building a compelling profile on Upwork and Fiverr, pricing strategies, proposal writing, client communication, contract management, invoicing, and scaling your freelance business.",
    "curriculum": [
      "Freelancing Fundamentals and Mindset",
      "Choosing Your Niche and Services",
      "Building Profiles on Upwork and Fiverr",
      "Writing Winning Proposals",
      "Pricing Strategies and Negotiation",
      "Client Communication and Expectation Management",
      "Contracts, Invoicing, and Payments",
      "Building Long-Term Client Relationships",
      "Scaling: Agency and Passive Income"
    ],
    "outcomes": [
      "Set up a winning Upwork or Fiverr profile",
      "Write proposals that win projects",
      "Price services confidently and profitably",
      "Manage clients and deliver projects professionally",
      "Scale from freelancer to a small agency"
    ]
  },
  {
    "id": 26,
    "title": "Cybersecurity Fundamentals for Beginners",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "980",
    "level": "Beginner",
    "description": "Understand the fundamentals of cyber threats, online safety, and basic security practices.",
    "fullDescription": "Designed for non-technical professionals and beginners, this course provides essential cyber security literacy. Topics include types of cyber threats, phishing and social engineering, password security, safe browsing, VPN usage, data encryption basics, and organisational security policies.",
    "curriculum": [
      "What is Cybersecurity and Why It Matters",
      "Types of Cyber Threats: Malware, Ransomware, Phishing",
      "Social Engineering and Human Factors",
      "Password Management and Two-Factor Authentication",
      "Safe Browsing and Email Practices",
      "VPNs, Firewalls, and Encryption Basics",
      "Wi-Fi and Mobile Device Security",
      "Data Privacy Laws (GDPR, IT Act India)",
      "Incident Reporting and Response Basics"
    ],
    "outcomes": [
      "Identify and avoid common cyber threats",
      "Implement strong password and 2FA practices",
      "Use VPNs and secure browsing habits",
      "Understand data privacy regulations",
      "Respond appropriately to security incidents"
    ]
  },
  {
    "id": 27,
    "title": "Banking and Financial Services",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "760",
    "level": "Beginner",
    "description": "Learn banking operations, financial products, and core finance skills for a banking career.",
    "fullDescription": "This course prepares students for entry-level roles in banks, NBFCs, and financial institutions. Topics include banking operations, KYC norms, types of accounts and loans, foreign exchange, insurance basics, mutual funds, retail banking, and the Indian financial regulatory framework (RBI, SEBI, IRDAI).",
    "curriculum": [
      "Introduction to Banking and Finance",
      "Types of Banks and Accounts",
      "KYC and AML Compliance",
      "Loans, Credit, and Mortgages",
      "Foreign Exchange and Trade Finance",
      "Mutual Funds and Insurance Basics",
      "Banking Software and CBS",
      "Indian Financial Regulators: RBI, SEBI, IRDAI",
      "Interview Preparation for Banking Roles"
    ],
    "outcomes": [
      "Understand core banking products and operations",
      "Apply KYC and compliance procedures",
      "Explain mutual funds and insurance products",
      "Navigate the Indian financial regulatory landscape",
      "Prepare for banking sector job interviews"
    ]
  },
  {
    "id": 28,
    "title": "Data Analytics with Power BI and SQL",
    "category": "Career",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "1.9k",
    "level": "Beginner",
    "description": "Turn raw data into actionable business insights using SQL, Excel, and Power BI dashboards.",
    "fullDescription": "Designed for business professionals and aspiring analysts, this course teaches you to query databases with SQL, clean and model data in Excel, and build interactive dashboards in Power BI. Real business datasets from retail, finance, and HR are used to give practical, job-ready experience.",
    "curriculum": [
      "Introduction to Data Analytics",
      "SQL Querying: SELECT, JOIN, Aggregates",
      "Advanced SQL: Subqueries and Window Functions",
      "Excel for Data Analysis",
      "Introduction to Power BI",
      "Data Modeling and DAX",
      "Building Interactive Dashboards",
      "Publishing and Sharing Reports",
      "Capstone: Business Analytics Dashboard"
    ],
    "outcomes": [
      "Write complex SQL queries confidently",
      "Build Power BI dashboards from scratch",
      "Perform data modeling with DAX",
      "Communicate data insights visually",
      "Apply analytics to real business problems"
    ]
  }
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

