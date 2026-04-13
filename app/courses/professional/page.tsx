import CoursesCategoryHero from "@/components/courses/courses-category-hero"
import CoursesList from "@/components/courses/courses-list"
import CourseSearch from "@/components/courses/course-search"
import CtaSection from "@/components/cta-section"

const professionalCourses = [
  {
    "id": 1,
    "title": "Full Stack Development (MERN)",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2400&auto=format&fit=crop",
    "duration": "16 weeks",
    "students": "2.1k",
    "level": "Intermediate",
    "description": "Master the MERN stack — MongoDB, Express, React, and Node.js — to build full-stack web applications.",
    "fullDescription": "This in-depth course trains you to develop complete web applications from front to back. You will work with MongoDB for database management, Express.js and Node.js for server-side logic, and React for dynamic user interfaces. Real-world projects and live deployments are a key part of the curriculum.",
    "curriculum": [
      "JavaScript ES6+ Refresher",
      "Node.js and Express Fundamentals",
      "MongoDB and Mongoose",
      "RESTful API Design",
      "React Fundamentals and Hooks",
      "Redux State Management",
      "Authentication with JWT",
      "Deployment on AWS/Heroku",
      "Capstone: Full Stack E-Commerce App"
    ],
    "outcomes": [
      "Build production-ready full stack applications",
      "Design and consume REST APIs",
      "Manage state with Redux",
      "Deploy apps to cloud platforms",
      "Implement secure authentication systems"
    ]
  },
  {
    "id": 2,
    "title": "PHP and MySQL Web Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "750",
    "level": "Intermediate",
    "description": "Develop dynamic websites and web applications using PHP server-side scripting and MySQL databases.",
    "fullDescription": "This course covers server-side web development using PHP and MySQL. You will learn PHP syntax, form handling, sessions, file management, and object-oriented PHP. Database design, CRUD operations, and integration with front-end technologies are also covered. You will build and deploy a complete CMS project by the end.",
    "curriculum": [
      "PHP Syntax and Basics",
      "Forms, Sessions, and Cookies",
      "Object-Oriented PHP",
      "MySQL Database Design",
      "CRUD Operations with PDO",
      "MVC Architecture",
      "Security: SQL Injection and XSS Prevention",
      "Building a Content Management System",
      "Deployment and Hosting"
    ],
    "outcomes": [
      "Develop dynamic server-side web applications",
      "Design relational databases with MySQL",
      "Implement secure login and registration systems",
      "Apply MVC patterns in PHP",
      "Deploy PHP apps to live servers"
    ]
  },
  {
    "id": 3,
    "title": "React.js Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "1.4k",
    "level": "Intermediate",
    "description": "Build modern, scalable web applications with React.js, Hooks, and the React ecosystem.",
    "fullDescription": "Dedicated to the React.js library, this course goes deep into component architecture, hooks, context API, React Router, Redux Toolkit, REST API integration, and performance optimization. By the end, students will have built and deployed 3 full React applications with clean code and professional architecture.",
    "curriculum": [
      "JSX and Component Architecture",
      "Props, State, and Lifecycle",
      "React Hooks: useState, useEffect, useContext",
      "React Router for Navigation",
      "Redux Toolkit for State Management",
      "Fetching Data with Axios and React Query",
      "Forms and Validation",
      "Performance Optimization",
      "Testing React Components",
      "Deployment with Vercel and Netlify"
    ],
    "outcomes": [
      "Build scalable React component architectures",
      "Manage global state with Redux Toolkit",
      "Fetch and display data from REST APIs",
      "Write tests for React components",
      "Deploy React apps to production"
    ]
  },
  {
    "id": 4,
    "title": "Angular Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "670",
    "level": "Intermediate",
    "description": "Build enterprise-grade single-page applications with Angular, TypeScript, and RxJS.",
    "fullDescription": "Angular is the enterprise-favourite front-end framework from Google. This course covers TypeScript fundamentals, Angular components, directives, services, dependency injection, Angular Router, reactive forms, NgRx state management, and REST API integration with HttpClient and RxJS observables.",
    "curriculum": [
      "TypeScript Fundamentals",
      "Angular CLI and Project Structure",
      "Components, Templates, and Data Binding",
      "Directives and Pipes",
      "Services and Dependency Injection",
      "Angular Router and Guards",
      "Reactive Forms and Validation",
      "HttpClient and RxJS Observables",
      "NgRx State Management",
      "Testing and Deployment"
    ],
    "outcomes": [
      "Build scalable Angular SPAs",
      "Use TypeScript and RxJS effectively",
      "Implement reactive forms with validation",
      "Manage application state with NgRx",
      "Secure Angular routes with guards"
    ]
  },
  {
    "id": 5,
    "title": "Node.js and Express Backend Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2400&auto=format&fit=crop",
    "duration": "8 weeks",
    "students": "820",
    "level": "Intermediate",
    "description": "Build fast and scalable backend services and REST APIs with Node.js and Express.js.",
    "fullDescription": "This course is dedicated to server-side JavaScript development. You will build RESTful APIs with Node.js and Express, handle authentication with JWT and OAuth, connect to MongoDB and PostgreSQL databases, write unit tests with Jest, and deploy on AWS and Heroku. The course follows industry best practices including MVC architecture and middleware design.",
    "curriculum": [
      "Node.js Event Loop and Modules",
      "Express.js Setup and Routing",
      "Middleware and Error Handling",
      "REST API Design Principles",
      "Authentication: JWT and OAuth2",
      "Database Integration: Mongoose and Sequelize",
      "File Uploads with Multer",
      "Unit Testing with Jest and Supertest",
      "API Documentation with Swagger",
      "Deployment on Heroku and AWS EC2"
    ],
    "outcomes": [
      "Build RESTful APIs with Express.js",
      "Implement JWT-based authentication",
      "Integrate SQL and NoSQL databases",
      "Write and run backend unit tests",
      "Deploy Node.js apps to cloud servers"
    ]
  },
  {
    "id": 6,
    "title": "Django and Python Web Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "750",
    "level": "Intermediate",
    "description": "Build robust web applications and REST APIs with Django and Django REST Framework.",
    "fullDescription": "Django is Python's most popular web framework, loved for its speed of development and security. This course covers Django ORM, URL routing, templates, forms, class-based views, user authentication, and building REST APIs with Django REST Framework. Deployment on AWS and Docker are also covered.",
    "curriculum": [
      "Django Project Setup and MTV Architecture",
      "URL Routing and Views",
      "Django ORM and Models",
      "Django Templates and Forms",
      "Class-Based Views",
      "User Authentication and Permissions",
      "Django REST Framework (DRF) Basics",
      "Serializers, ViewSets, and Routers",
      "Deploying Django with Docker and AWS",
      "Project: Full-Stack Django Application"
    ],
    "outcomes": [
      "Build complete Django web applications",
      "Design and query databases with Django ORM",
      "Create RESTful APIs with DRF",
      "Implement user authentication and permissions",
      "Deploy Django apps using Docker and AWS"
    ]
  },
  {
    "id": 7,
    "title": ".NET Framework Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "680",
    "level": "Intermediate",
    "description": "Build Windows and web applications using C#, ASP.NET, and the .NET framework.",
    "fullDescription": "This course covers C# programming and application development on the Microsoft .NET platform. Topics include C# syntax, OOP, Windows Forms, ASP.NET MVC, Entity Framework, and REST API development. You will build both desktop and web applications using Visual Studio and deploy them on Windows servers.",
    "curriculum": [
      "C# Basics and OOP",
      "Windows Forms Application Development",
      "ADO.NET and Database Access",
      "ASP.NET MVC Architecture",
      "Entity Framework and LINQ",
      "RESTful Web APIs in .NET",
      "Authentication and Authorization",
      "Unit Testing in .NET",
      "Project: Business Management System"
    ],
    "outcomes": [
      "Develop Windows desktop applications",
      "Build ASP.NET MVC web applications",
      "Work with Entity Framework ORM",
      "Create RESTful APIs with .NET",
      "Apply best practices in C# development"
    ]
  },
  {
    "id": 8,
    "title": "Android App Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2400&auto=format&fit=crop",
    "duration": "14 weeks",
    "students": "1.8k",
    "level": "Intermediate",
    "description": "Design and develop native Android applications using Java/Kotlin and Android Studio.",
    "fullDescription": "This course takes you through the full lifecycle of Android app development. Starting with Android Studio setup and basic UI design, you will learn Activities, Fragments, RecyclerView, SQLite, REST API integration, and publishing to the Google Play Store. Real-world app projects are included throughout.",
    "curriculum": [
      "Introduction to Android and Android Studio",
      "Activities, Intents, and Layouts",
      "RecyclerView and Adapters",
      "Navigation and Fragments",
      "SQLite and Room Database",
      "Networking with Retrofit",
      "Firebase Integration",
      "Push Notifications",
      "Publishing to Google Play Store"
    ],
    "outcomes": [
      "Build fully functional Android applications",
      "Work with Android UI components",
      "Integrate REST APIs into mobile apps",
      "Store data locally using Room",
      "Publish apps to the Google Play Store"
    ]
  },
  {
    "id": 9,
    "title": "iOS App Development (Swift)",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2400&auto=format&fit=crop",
    "duration": "14 weeks",
    "students": "620",
    "level": "Intermediate",
    "description": "Create native iOS apps for iPhone and iPad using Swift and Xcode.",
    "fullDescription": "Learn iOS development from the ground up using Apple's Swift programming language and Xcode IDE. You will cover Swift syntax, UIKit, SwiftUI, Auto Layout, Core Data, networking, and app deployment to the App Store. A portfolio of real apps is built throughout the course.",
    "curriculum": [
      "Swift Programming Language Basics",
      "UIKit: ViewControllers and Storyboards",
      "Auto Layout and Constraints",
      "TableViews and CollectionViews",
      "SwiftUI Fundamentals",
      "Core Data and Persistence",
      "Networking with URLSession and Codable",
      "Maps and Location Services",
      "App Store Submission"
    ],
    "outcomes": [
      "Develop iOS applications in Swift",
      "Design with UIKit and SwiftUI",
      "Persist data with Core Data",
      "Consume REST APIs in iOS apps",
      "Submit and publish apps to the App Store"
    ]
  },
  {
    "id": 10,
    "title": "Flutter Cross-Platform App Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "1.0k",
    "level": "Intermediate",
    "description": "Build beautiful cross-platform mobile apps for Android and iOS using Flutter and Dart.",
    "fullDescription": "Flutter allows you to write one codebase that runs natively on both Android and iOS. This course covers Dart programming, Flutter widget tree, state management with Provider and Bloc, REST API integration, Firebase, and deployment to both platforms. You will ship at least two complete apps.",
    "curriculum": [
      "Dart Programming Fundamentals",
      "Flutter Widget Tree and Layouts",
      "Stateless and Stateful Widgets",
      "Navigation and Routing",
      "State Management: Provider and Bloc",
      "REST API Integration with Dio",
      "Firebase Authentication and Firestore",
      "Animations and Custom Widgets",
      "Build and Deploy to Android & iOS"
    ],
    "outcomes": [
      "Build cross-platform apps with a single codebase",
      "Manage state effectively with Provider/Bloc",
      "Integrate Firebase backend services",
      "Create smooth animations in Flutter",
      "Deploy apps to both major app stores"
    ]
  },
  {
    "id": 11,
    "title": "Data Science with Python",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    "duration": "16 weeks",
    "students": "2.5k",
    "level": "Intermediate",
    "description": "Master data analysis, visualization, and machine learning using Python's scientific stack.",
    "fullDescription": "This course covers the complete data science workflow: data collection, cleaning, exploration, visualization, and predictive modelling. Tools include NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, and Jupyter Notebooks. Real-world datasets are used throughout, and the course ends with an end-to-end machine learning project.",
    "curriculum": [
      "Python for Data Science Refresher",
      "NumPy and Array Operations",
      "Data Wrangling with Pandas",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization: Matplotlib and Seaborn",
      "Statistics for Data Science",
      "Machine Learning with Scikit-learn",
      "Regression, Classification, and Clustering",
      "Model Evaluation and Tuning",
      "Capstone: Predictive Analytics Project"
    ],
    "outcomes": [
      "Clean and preprocess raw datasets",
      "Perform exploratory data analysis",
      "Build and evaluate ML models",
      "Visualize data insights effectively",
      "Present data-driven business insights"
    ]
  },
  {
    "id": 12,
    "title": "3D Animation with Autodesk Maya",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2400&auto=format&fit=crop",
    "duration": "16 weeks",
    "students": "540",
    "level": "Intermediate",
    "description": "Create professional 3D models, rigs, and animations using Autodesk Maya.",
    "fullDescription": "This course teaches 3D modeling, texturing, rigging, and animation using Autodesk Maya, the industry standard for film, TV, and game production. You will build 3D characters and environments, apply materials, rig characters for animation, and render scenes using Arnold.",
    "curriculum": [
      "Introduction to Maya Interface",
      "3D Modeling: Polygons and NURBS",
      "UV Unwrapping and Texturing",
      "Lighting and Rendering with Arnold",
      "Character Rigging",
      "Keyframe Animation Principles",
      "Particle Systems and Dynamics",
      "Character Walk Cycle and Expressions",
      "Final Project: Short Animated Sequence"
    ],
    "outcomes": [
      "Create detailed 3D models and characters",
      "Rig and animate 3D characters",
      "Apply textures, lighting, and materials",
      "Render high-quality 3D scenes",
      "Build a professional animation showreel"
    ]
  },
  {
    "id": 13,
    "title": "VFX and Visual Effects",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2400&auto=format&fit=crop",
    "duration": "14 weeks",
    "students": "430",
    "level": "Intermediate",
    "description": "Create Hollywood-style visual effects, compositing, and motion graphics for film and video.",
    "fullDescription": "This course teaches visual effects production for film, TV, and online video using After Effects, Nuke, and Maya. Topics include green screen compositing, particle effects, explosions, motion tracking, rotoscoping, and photorealistic rendering. Students produce a VFX showreel for their portfolio.",
    "curriculum": [
      "Fundamentals of VFX Production",
      "Green Screen and Chroma Keying",
      "Motion Tracking and Camera Solving",
      "Rotoscoping Techniques",
      "Particle Effects and Simulations",
      "Compositing in After Effects",
      "Nuke for Professional Compositing",
      "Color Science and Final Grading",
      "VFX Showreel Production"
    ],
    "outcomes": [
      "Composite visual effects into live footage",
      "Track motion and solve camera movements",
      "Create particle simulations and explosions",
      "Produce a professional VFX showreel",
      "Understand the VFX pipeline for film/TV"
    ]
  },
  {
    "id": 14,
    "title": "Google Ads and PPC Advertising",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2400&auto=format&fit=crop",
    "duration": "5 weeks",
    "students": "890",
    "level": "Intermediate",
    "description": "Create, manage, and optimize profitable Google Ads campaigns across Search, Display, and YouTube.",
    "fullDescription": "Master Google Ads from campaign setup to advanced optimization. This course covers Search, Display, Shopping, and Video (YouTube) ad campaigns. You will learn bidding strategies, Quality Score optimization, remarketing, conversion tracking, and campaign reporting using Google Ads and Analytics.",
    "curriculum": [
      "Introduction to Pay-Per-Click Advertising",
      "Google Ads Account Structure",
      "Keyword Research for Paid Search",
      "Writing High-Converting Ad Copy",
      "Bidding Strategies and Budget Management",
      "Display Network and Remarketing",
      "Google Shopping Campaigns",
      "YouTube Advertising",
      "Conversion Tracking and Reporting"
    ],
    "outcomes": [
      "Set up and manage Google Ads accounts",
      "Write compelling ad copy that converts",
      "Optimize campaigns for maximum ROI",
      "Run remarketing and Display campaigns",
      "Track conversions and report on performance"
    ]
  },
  {
    "id": 15,
    "title": "Advanced Excel and MIS Reporting",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "2.7k",
    "level": "Intermediate",
    "description": "Master advanced Excel functions, pivot tables, dashboards, and MIS reporting for business.",
    "fullDescription": "This course elevates your Excel skills from basic to advanced. You will learn complex formulas (VLOOKUP, INDEX-MATCH, XLOOKUP), pivot tables, data validation, conditional formatting, Power Query, macros with VBA, and building automated MIS dashboards. Used widely in finance, operations, and HR roles.",
    "curriculum": [
      "Excel Interface and Data Entry Best Practices",
      "Advanced Formulas: VLOOKUP, INDEX-MATCH, XLOOKUP",
      "Array Formulas and Dynamic Arrays",
      "Pivot Tables and Pivot Charts",
      "Data Validation and Conditional Formatting",
      "Power Query: Data Import and Transformation",
      "Introduction to VBA and Macros",
      "Building Automated MIS Dashboards",
      "Real Business Case Studies"
    ],
    "outcomes": [
      "Use advanced Excel functions with confidence",
      "Build powerful pivot table reports",
      "Automate tasks with VBA macros",
      "Create interactive business dashboards",
      "Apply Excel in finance, HR, and operations"
    ]
  },
  {
    "id": 16,
    "title": "Automation Testing with Selenium",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "870",
    "level": "Intermediate",
    "description": "Automate web application testing using Selenium WebDriver with Java and TestNG.",
    "fullDescription": "This automation testing course teaches you to build robust test frameworks using Selenium WebDriver with Java. You will cover locators, XPath, handling dynamic elements, TestNG, Page Object Model, data-driven testing, and CI/CD integration with Jenkins. Real-world web applications are used for all exercises.",
    "curriculum": [
      "Java Refresher for Testers",
      "Selenium WebDriver Setup",
      "Element Locators and XPath",
      "Handling Dynamic Elements and Waits",
      "TestNG Framework",
      "Page Object Model (POM) Design Pattern",
      "Data-Driven Testing with Excel and CSV",
      "Extent Reports and Logging",
      "Jenkins CI/CD Integration",
      "Capstone: Full Automation Test Suite"
    ],
    "outcomes": [
      "Build Selenium test frameworks from scratch",
      "Implement Page Object Model architecture",
      "Run data-driven automated tests",
      "Generate detailed test reports",
      "Integrate automation into CI/CD pipelines"
    ]
  },
  {
    "id": 17,
    "title": "Performance Testing with JMeter",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "390",
    "level": "Intermediate",
    "description": "Learn load testing, stress testing, and performance monitoring using Apache JMeter.",
    "fullDescription": "Performance testing ensures applications behave correctly under load. This course teaches Apache JMeter for designing and executing load, stress, and endurance tests. You will configure thread groups, samplers, listeners, and assertions, analyze test results, and integrate JMeter with CI/CD pipelines.",
    "curriculum": [
      "Introduction to Performance Testing",
      "JMeter Installation and Interface",
      "Thread Groups, Samplers, and Listeners",
      "Assertions and Correlation",
      "Load and Stress Test Design",
      "Parameterization and Data Files",
      "Analyzing JMeter Test Results",
      "Distributed Testing",
      "JMeter and Jenkins Integration"
    ],
    "outcomes": [
      "Design and run load and stress tests",
      "Identify performance bottlenecks",
      "Configure JMeter for distributed testing",
      "Analyze and report test results",
      "Integrate performance tests in CI/CD"
    ]
  },
  {
    "id": 18,
    "title": "CCNA (Cisco Certified Network Associate)",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2400&auto=format&fit=crop",
    "duration": "14 weeks",
    "students": "560",
    "level": "Intermediate",
    "description": "Prepare for the Cisco CCNA certification with hands-on labs in routing, switching, and automation.",
    "fullDescription": "The CCNA course covers everything required to pass the Cisco 200-301 exam: network fundamentals, IP connectivity and services, security fundamentals, automation, and programmability. Students get extensive hands-on practice with Cisco IOS on real and simulated equipment.",
    "curriculum": [
      "Network Fundamentals and Media",
      "Cisco IOS CLI Basics",
      "VLANs, Trunking, and Inter-VLAN Routing",
      "Spanning Tree Protocol (STP)",
      "OSPF and Static Routing",
      "NAT, DHCP, and DNS",
      "ACLs and Security Fundamentals",
      "QoS and Network Management",
      "Automation and SDN Introduction",
      "CCNA 200-301 Exam Practice Tests"
    ],
    "outcomes": [
      "Configure and manage Cisco routers and switches",
      "Implement VLANs and inter-VLAN routing",
      "Understand OSPF and routing protocols",
      "Apply basic network security with ACLs",
      "Pass the Cisco CCNA 200-301 exam"
    ]
  },
  {
    "id": 19,
    "title": "Revit for Architecture and BIM",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "420",
    "level": "Intermediate",
    "description": "Design intelligent BIM models for buildings and construction using Autodesk Revit.",
    "fullDescription": "Building Information Modelling (BIM) is transforming the construction industry. This course teaches Autodesk Revit for architectural design, structural modelling, MEP coordination, and construction documentation. Students produce a complete BIM model of a residential building.",
    "curriculum": [
      "Introduction to BIM and Revit",
      "Project Setup and Levels",
      "Walls, Doors, and Windows",
      "Floors, Roofs, and Ceilings",
      "Stairs and Railings",
      "Site and Landscape Modelling",
      "Construction Documentation and Sheets",
      "Schedules and Quantities",
      "Rendering and Walkthroughs",
      "Final Project: Residential BIM Model"
    ],
    "outcomes": [
      "Create complete BIM models in Revit",
      "Produce professional construction documents",
      "Generate schedules and material quantities",
      "Coordinate architectural and structural elements",
      "Render photorealistic architectural visualizations"
    ]
  },
  {
    "id": 20,
    "title": "3ds Max for Visualization",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1545289414-1253d059b33c?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "380",
    "level": "Intermediate",
    "description": "Create photorealistic 3D architectural visualizations and product renders using Autodesk 3ds Max.",
    "fullDescription": "3ds Max is the go-to tool for architectural and product visualization. This course covers the complete 3D visualization pipeline: modelling, texturing with V-Ray materials, lighting, and photorealistic rendering. Interior and exterior scene creation are both covered.",
    "curriculum": [
      "3ds Max Interface and Modelling Tools",
      "Polygon and Spline Modelling",
      "Material Editor and V-Ray Materials",
      "Lighting: Sunlight, HDRI, and Artificial",
      "Camera Setup and Composition",
      "V-Ray Rendering Settings",
      "Interior Scene Visualization",
      "Exterior Scene Visualization",
      "Post-Processing in Photoshop",
      "Portfolio: 3 Photorealistic Renders"
    ],
    "outcomes": [
      "Model and texture 3D architectural scenes",
      "Set up photorealistic V-Ray renders",
      "Light interior and exterior spaces professionally",
      "Post-process renders in Photoshop",
      "Build a 3D visualization portfolio"
    ]
  },
  {
    "id": 21,
    "title": "SolidWorks for Mechanical Design",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "350",
    "level": "Intermediate",
    "description": "Design and engineer mechanical parts and assemblies using SolidWorks CAD software.",
    "fullDescription": "SolidWorks is widely used in mechanical and product engineering. This course covers part modelling, assembly design, engineering drawings, sheet metal design, and basic simulation (FEA). Students build a series of mechanical projects including a functional assembly.",
    "curriculum": [
      "SolidWorks Interface and Sketching",
      "Part Modelling: Boss, Cut, Fillet",
      "Assemblies and Mates",
      "Engineering Drawings and GD&T",
      "Sheet Metal Design",
      "Surface Modelling Basics",
      "Design Tables and Configurations",
      "SolidWorks Simulation (FEA) Basics",
      "Project: Mechanical Assembly with Drawings"
    ],
    "outcomes": [
      "Model complex mechanical parts in SolidWorks",
      "Create assemblies with proper constraints",
      "Produce engineering drawings to industry standards",
      "Design sheet metal parts",
      "Run basic FEA simulations"
    ]
  },
  {
    "id": 22,
    "title": "Interior Designing",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop",
    "duration": "16 weeks",
    "students": "730",
    "level": "Beginner",
    "description": "Learn interior design principles, space planning, material selection, and 3D visualization.",
    "fullDescription": "This comprehensive interior design course covers design theory, space planning, furniture layout, material and color selection, lighting design, and client presentation skills. Software training includes AutoCAD for floor plans, SketchUp for 3D modelling, and Photoshop for mood boards.",
    "curriculum": [
      "Elements and Principles of Design",
      "Space Planning and Furniture Layout",
      "Color Theory and Materials",
      "Lighting Design",
      "AutoCAD for Interior Floor Plans",
      "3D Modelling with SketchUp",
      "Rendering with V-Ray or Lumion",
      "Mood Boards and Client Presentations",
      "Project Estimation and Budgeting",
      "Final Project: Complete Residential Interior"
    ],
    "outcomes": [
      "Plan and design functional interior spaces",
      "Select materials, colors, and furnishings",
      "Draft floor plans using AutoCAD",
      "Create 3D visualizations in SketchUp",
      "Present designs professionally to clients"
    ]
  },
  {
    "id": 23,
    "title": "PLC and SCADA (Industrial Automation)",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2400&auto=format&fit=crop",
    "duration": "12 weeks",
    "students": "390",
    "level": "Intermediate",
    "description": "Learn programmable logic controllers (PLC) and SCADA systems for industrial automation.",
    "fullDescription": "This course covers industrial automation using PLCs and SCADA systems. You will learn PLC ladder logic programming, HMI configuration, SCADA communication protocols, sensor and actuator interfacing, and industrial safety standards. Practical sessions use Siemens and Allen-Bradley PLCs.",
    "curriculum": [
      "Introduction to Industrial Automation",
      "PLC Architecture and Components",
      "Ladder Logic Programming",
      "Timer and Counter Instructions",
      "Analog I/O and PID Control",
      "HMI Design and Configuration",
      "SCADA Systems and Communication Protocols",
      "Sensor and Actuator Interfacing",
      "Industrial Safety Standards",
      "Project: Automated Production Line Simulation"
    ],
    "outcomes": [
      "Program PLCs using ladder logic",
      "Design HMI screens for industrial use",
      "Configure SCADA monitoring systems",
      "Interface sensors and actuators",
      "Apply industrial safety and standards"
    ]
  },
  {
    "id": 24,
    "title": "Embedded Systems and Arduino/Raspberry Pi",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "460",
    "level": "Intermediate",
    "description": "Build real-world embedded systems and IoT projects using Arduino and Raspberry Pi.",
    "fullDescription": "This course introduces embedded systems programming and IoT development. You will learn C/C++ programming for Arduino microcontrollers, Python for Raspberry Pi, GPIO interfacing, sensor integration, serial communication protocols (UART, SPI, I2C), and building IoT prototypes that connect to the cloud.",
    "curriculum": [
      "Embedded Systems Introduction",
      "Arduino Hardware and IDE",
      "C/C++ for Microcontrollers",
      "GPIO and Sensor Interfacing",
      "Serial Communication: UART, SPI, I2C",
      "Raspberry Pi Setup and GPIO",
      "Python for Raspberry Pi",
      "IoT Connectivity: MQTT and Wi-Fi",
      "IoT Cloud Integration",
      "Project: Smart Home Automation Prototype"
    ],
    "outcomes": [
      "Program Arduino microcontrollers",
      "Interface sensors and actuators with GPIOs",
      "Use Python on Raspberry Pi for embedded apps",
      "Implement serial communication protocols",
      "Build working IoT prototypes"
    ]
  },
  {
    "id": 25,
    "title": "E-Commerce Website Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "810",
    "level": "Intermediate",
    "description": "Build a fully functional e-commerce store with payment gateway, product management, and SEO.",
    "fullDescription": "This course teaches you to build complete e-commerce platforms from scratch. Using WooCommerce, Shopify, and custom PHP/React stacks, you will cover product management, shopping cart, payment gateway integration (Razorpay, Stripe), order management, and conversion rate optimization.",
    "curriculum": [
      "E-Commerce Business Models",
      "WooCommerce Setup and Configuration",
      "Product Catalogue and Inventory",
      "Payment Gateway Integration: Razorpay and Stripe",
      "Shopify Store Development",
      "Order Management and Fulfilment",
      "E-Commerce SEO",
      "Conversion Rate Optimization (CRO)",
      "Analytics: Google Analytics and Facebook Pixel",
      "Project: Launch a Live Online Store"
    ],
    "outcomes": [
      "Build and launch a fully functional online store",
      "Integrate payment gateways securely",
      "Optimize product pages for search and conversion",
      "Track sales analytics with Google Analytics",
      "Manage inventory and fulfilment operations"
    ]
  },
  {
    "id": 26,
    "title": "SQL and Database Management",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "1.6k",
    "level": "Beginner",
    "description": "Learn SQL from scratch to design databases and extract business insights with queries.",
    "fullDescription": "This course teaches relational database design and SQL querying from the ground up. You will cover database normalization, DDL/DML commands, JOIN operations, subqueries, window functions, stored procedures, and basic database administration. MySQL and PostgreSQL are both used in hands-on exercises.",
    "curriculum": [
      "Introduction to Databases and RDBMS",
      "Database Design and Normalization",
      "DDL: CREATE, ALTER, DROP",
      "DML: INSERT, UPDATE, DELETE, SELECT",
      "WHERE Clauses and Filtering",
      "JOIN Operations",
      "Subqueries and CTEs",
      "Window Functions",
      "Stored Procedures, Functions, and Triggers",
      "Database Administration Basics"
    ],
    "outcomes": [
      "Design normalized relational databases",
      "Write complex SQL queries with JOINs and subqueries",
      "Use window functions for analytics",
      "Create stored procedures and triggers",
      "Administer MySQL and PostgreSQL databases"
    ]
  },
  {
    "id": 27,
    "title": "MongoDB and NoSQL Databases",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    "duration": "6 weeks",
    "students": "590",
    "level": "Intermediate",
    "description": "Master MongoDB and NoSQL database design for modern web and mobile applications.",
    "fullDescription": "MongoDB is the leading NoSQL database for modern applications. This course covers document-based database design, CRUD operations, aggregation pipelines, indexing, schema design, and Atlas cloud deployment. MongoDB is integrated with Node.js and Mongoose for full-stack development use cases.",
    "curriculum": [
      "NoSQL vs Relational Databases",
      "MongoDB Setup and Atlas",
      "CRUD Operations",
      "Document Data Modelling",
      "Aggregation Framework",
      "Indexing and Query Performance",
      "Schema Design Patterns",
      "Mongoose ODM with Node.js",
      "MongoDB Security and Backup"
    ],
    "outcomes": [
      "Design flexible document databases",
      "Perform complex aggregations in MongoDB",
      "Optimize queries with indexes",
      "Integrate MongoDB with Node.js using Mongoose",
      "Deploy MongoDB on Atlas cloud"
    ]
  },
  {
    "id": 28,
    "title": "IoT (Internet of Things) Development",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2400&auto=format&fit=crop",
    "duration": "10 weeks",
    "students": "370",
    "level": "Intermediate",
    "description": "Design and build connected IoT devices, sensor networks, and cloud-integrated smart systems.",
    "fullDescription": "This course covers the full IoT development stack from device programming to cloud integration. You will build IoT prototypes with ESP32 and Raspberry Pi, program sensor networks, transmit data over MQTT, visualize data on dashboards, and connect devices to AWS IoT and Google Cloud IoT.",
    "curriculum": [
      "IoT Architecture and Protocols",
      "ESP32 and NodeMCU Programming",
      "Sensor Integration: Temperature, Humidity, Motion",
      "Wi-Fi and Bluetooth Communication",
      "MQTT Protocol and Broker Setup",
      "IoT Dashboard: Node-RED",
      "AWS IoT Core Integration",
      "Data Storage and Analytics for IoT",
      "Edge Computing Basics",
      "Project: Smart Home IoT System"
    ],
    "outcomes": [
      "Build IoT devices with ESP32 and sensors",
      "Implement MQTT communication between devices",
      "Visualize IoT data in real-time dashboards",
      "Integrate IoT devices with AWS IoT Core",
      "Apply IoT to smart home and industrial scenarios"
    ]
  },
  {
    "id": 29,
    "title": "PGDCA (Post Graduate Diploma in Computer Applications)",
    "category": "Professional",
    "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2400&auto=format&fit=crop",
    "duration": "1 year",
    "students": "1.2k",
    "level": "Intermediate",
    "description": "A comprehensive post-graduate diploma covering programming, databases, networking, and business applications.",
    "fullDescription": "PGDCA is a 1-year post-graduate diploma covering a broad range of computer applications. The programme includes programming in C and Java, database management, web technologies, networking basics, software engineering, project management, and business applications. Ideal for graduates looking to transition into IT careers.",
    "curriculum": [
      "Computer Fundamentals and OS",
      "Programming in C and C++",
      "Data Structures and Algorithms",
      "Database Management with SQL",
      "Object-Oriented Programming with Java",
      "Web Technologies: HTML, CSS, JavaScript",
      "Networking and Cyber Security Basics",
      "Software Engineering Concepts",
      "Project Management",
      "Final Year Project"
    ],
    "outcomes": [
      "Build a broad foundation across IT domains",
      "Develop and manage software applications",
      "Work with databases and networking",
      "Apply software engineering practices",
      "Qualify for government and private IT roles requiring PGDCA"
    ]
  }
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

