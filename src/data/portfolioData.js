export const personalInfo = {
  name: "Atharva Pachpute",
  role: "Full-Stack Software Engineer",
  tagline: "Architecting high-throughput backend services, distributed systems & AI-driven applications with Spring Boot, Redis, PostgreSQL, and React.",
  location: "Pune, Maharashtra, India",
  phone: "+91-93090 38873",
  email: "atharvapachpute6@gmail.com",
  linkedin: "https://linkedin.com/in/atharva-pachpute3",
  github: "https://github.com/SyntaxNova",
  avatarUrl: "/profile.png",
  resumeUrl: "/Atharva_Pachpute_Resume.pdf",
  expectedGraduation: "June 2026",
  stats: [
    { label: "DSA Problems Solved", value: "200+", sub: "LeetCode, GFG & HackerRank" },
    { label: "Redis Latency Drop", value: "80%", sub: "120ms → <25ms in Production" },
    { label: "Production Uptime", value: "99%", sub: "Render & Vercel Deployments" },
    { label: "Current CGPA", value: "8.01", sub: "PES Modern College of Engineering" }
  ]
};

export const education = {
  degree: "Bachelor of Engineering — Information Technology",
  institution: "PES Modern College of Engineering",
  university: "Savitribai Phule Pune University",
  graduation: "Expected June 2026",
  cgpa: "8.01 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "System Design & Scalability"
  ]
};

export const skillsData = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "Java", level: "Advanced", icon: "coffee", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "file-code", highlight: true },
      { name: "SQL", level: "Advanced", icon: "database", highlight: true },
      { name: "HTML5", level: "Proficient", icon: "layout" },
      { name: "CSS3", level: "Proficient", icon: "palette" }
    ]
  },
  {
    category: "Backend & Architecture",
    icon: "server",
    skills: [
      { name: "Spring Boot", level: "Advanced", icon: "cpu", highlight: true },
      { name: "Spring Security", level: "Advanced", icon: "shield-check", highlight: true },
      { name: "Spring Data JPA", level: "Advanced", icon: "layers" },
      { name: "Hibernate ORM", level: "Proficient", icon: "box" },
      { name: "REST APIs", level: "Advanced", icon: "network", highlight: true },
      { name: "JWT Authentication", level: "Advanced", icon: "key", highlight: true },
      { name: "Node.js", level: "Proficient", icon: "terminal" },
      { name: "Express.js", level: "Proficient", icon: "server" }
    ]
  },
  {
    category: "Databases & Caching",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "database", highlight: true },
      { name: "Redis (Cache-Aside)", level: "Advanced", icon: "zap", highlight: true },
      { name: "Neon PostgreSQL", level: "Proficient", icon: "cloud" },
      { name: "MySQL", level: "Proficient", icon: "database" }
    ]
  },
  {
    category: "Frontend & UI",
    icon: "layout",
    skills: [
      { name: "React.js", level: "Advanced", icon: "atom", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", icon: "wind", highlight: true },
      { name: "Chart.js", level: "Proficient", icon: "bar-chart-2" },
      { name: "Axios", level: "Proficient", icon: "arrow-right-left" },
      { name: "Responsive UI", level: "Advanced", icon: "smartphone" }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: "cloud",
    skills: [
      { name: "AWS (Cloud Architecting)", level: "Certified", icon: "cloud-lightning", highlight: true },
      { name: "Docker", level: "Proficient", icon: "box", highlight: true },
      { name: "Git & GitHub", level: "Advanced", icon: "git-branch" },
      { name: "Postman", level: "Advanced", icon: "send" },
      { name: "Maven", level: "Advanced", icon: "package" },
      { name: "Vercel", level: "Proficient", icon: "globe" },
      { name: "Render", level: "Proficient", icon: "server" }
    ]
  },
  {
    category: "CS Fundamentals & Core",
    icon: "binary",
    skills: [
      { name: "Data Structures & Algorithms", level: "200+ Solved", icon: "workflow", highlight: true },
      { name: "System Design & Scalability", level: "Proficient", icon: "git-merge", highlight: true },
      { name: "OOP Principles", level: "Advanced", icon: "boxes" },
      { name: "DBMS & Indexing", level: "Advanced", icon: "database" },
      { name: "Operating Systems", level: "Proficient", icon: "terminal" },
      { name: "Computer Networks", level: "Proficient", icon: "wifi" }
    ]
  }
];

export const projectsData = [
  {
    id: "finnova-ai",
    title: "FinNova AI",
    subtitle: "AI-Powered Personal Finance SaaS Platform",
    period: "Apr 2026 – Jun 2026",
    badge: "Full-Stack SaaS",
    featured: true,
    description: "Production-deployed financial intelligence platform featuring automated expense analytics, custom budget tracking, and real-time AI-powered financial advisory via Google Gemini.",
    metrics: [
      { label: "Tracking Effort", value: "-70%", desc: "Automated aggregation" },
      { label: "API Response", value: "-40%", desc: "Optimized JPA queries" },
      { label: "Production Uptime", value: "99%", desc: "Render & Vercel deployment" },
      { label: "Secured Endpoints", value: "15+", desc: "JWT & Spring Security" }
    ],
    techStack: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Gemini AI",
      "React.js",
      "Tailwind CSS",
      "Chart.js",
      "Vercel",
      "Render"
    ],
    highlights: [
      "Engineered a production-deployed full-stack AI finance platform for expense tracking, budget management, and savings goals, reducing manual tracking effort by 70%.",
      "Secured 15+ REST API endpoints with JWT Authentication via Spring Security and BCrypt encryption, enforcing role-based access control and user-specific data isolation.",
      "Architected 15+ RESTful APIs following the Controller-Service-Repository pattern, cutting average API response time by 40% through indexed PostgreSQL queries and optimized JPA joins.",
      "Integrated Google Gemini AI to deliver personalized budget recommendations and financial health insights to 100% of registered users on demand.",
      "Configured robust production environment on Vercel (frontend) and Render (backend) with hardened CORS policies and zero-leak environment secret configuration, achieving 99% uptime."
    ],
    architecture: {
      client: "React.js + Tailwind + Chart.js (Vercel CDN)",
      security: "Spring Security filter chain + BCrypt + Stateless JWT tokens",
      backend: "Spring Boot REST Controller → Service Layer → JPA Repository",
      dataAi: "PostgreSQL Database + Google Gemini Pro AI API"
    },
    githubUrl: "https://github.com/SyntaxNova/FinNova-AI",
    liveUrl: "https://finnova-ai-demo.vercel.app"
  },
  {
    id: "url-shortener",
    title: "URL Shortener Service",
    subtitle: "Production-Grade Scalable Redirection System",
    period: "Mar 2026 – Apr 2026",
    badge: "High-Throughput Backend",
    featured: true,
    description: "Enterprise-grade URL shortening and telemetry tracking engine engineered to handle high concurrency with Base62 mathematical encoding and a Redis cache-aside tier.",
    metrics: [
      { label: "Database Lookups", value: "-80%", desc: "Redis Cache-Aside hit rate" },
      { label: "Redirection Latency", value: "<25ms", desc: "Down from 120ms DB lookup" },
      { label: "Query Speed", value: "+60%", desc: "Indexed short-code lookups" },
      { label: "Active URLs Handled", value: "1,000+", desc: "Zero collision Base62" }
    ],
    techStack: [
      "Spring Boot",
      "Java",
      "Redis",
      "PostgreSQL",
      "REST APIs",
      "Maven",
      "React.js",
      "Render",
      "Vercel"
    ],
    highlights: [
      "Delivered a production-grade URL shortening service leveraging collision-resistant Base62 bi-directional encoding, managing 1,000+ active URLs across live workloads.",
      "Reduced persistent database lookups by 80% via Redis cache-aside pattern, cutting average redirection latency from 120ms to under 25ms on read-heavy traffic.",
      "Designed 8+ REST API endpoints for URL creation, instant redirection, and click analytics tracking with DTO-based validation and clean separation of concerns across backend layers.",
      "Improved query performance by 60% through indexed short-code lookups and schema optimization, sustaining high-throughput workloads with sub-30ms average DB response time.",
      "Architected graceful fallback: when Redis cache misses, query resolves from PostgreSQL and automatically warms the Redis cache with configurable TTL."
    ],
    architecture: {
      client: "React.js client with real-time analytics dashboard",
      caching: "Redis In-Memory Cache (Cache-Aside pattern with TTL)",
      backend: "Spring Boot Microservice + Base62 Encoding Engine + DTO Validator",
      data: "PostgreSQL with B-tree index on short_code for O(1) lookups"
    },
    githubUrl: "https://github.com/SyntaxNova/url-shortener-service",
    liveUrl: "https://short-link-service.vercel.app"
  },
  {
    id: "algovision",
    title: "AlgoVision",
    subtitle: "Interactive DSA Visualizer & Algorithm Sandbox",
    period: "Oct 2025 – Dec 2025",
    badge: "Interactive CS Tool",
    featured: true,
    description: "High-performance visual algorithmic playground rendering step-by-step state transformations for graph traversals and comparison sort algorithms.",
    metrics: [
      { label: "Render Boost", value: "+35%", desc: "React memoization & hooks" },
      { label: "Graph Capacity", value: "100+", desc: "Nodes rendered smoothly" },
      { label: "Algorithms", value: "6 Core", desc: "BFS, DFS, Dijkstra, Sorts" },
      { label: "Playback", value: "Interactive", desc: "Step-by-step & speed controls" }
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vercel"
    ],
    highlights: [
      "Implemented real-time visualizations for 6 foundational algorithms (BFS, DFS, Dijkstra's Shortest Path, Bubble Sort, Merge Sort, Quick Sort) with step-by-step animation controls.",
      "Boosted render performance by 35% through granular React memoization, custom array hooks, and decoupled state subscriptions, supporting smooth 60fps animations across 100+ node graphs.",
      "Engineered user-controlled execution timeline allowing pause, resume, variable-speed replay, custom node weight assignments, and instant random graph generators.",
      "Designed an intuitive UI highlighting the active pointer, comparisons, swap operations, and visited node frontiers with color-coded visual cues."
    ],
    architecture: {
      visualizer: "Custom React Canvas / SVG Engine with micro-task animation queue",
      stateManagement: "Custom step-engine keeping time-travel history of algorithmic states",
      algorithms: "Graph algorithms (Dijkstra, BFS, DFS) & Sorting (Quick, Merge, Bubble)"
    },
    githubUrl: "https://github.com/SyntaxNova/AlgoVision",
    liveUrl: "https://algovision-visualizer.vercel.app"
  }
];

export const achievementsData = [
  {
    id: "aws",
    title: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified 2024",
    highlight: "40+ Hours Hands-On Training",
    description: "Comprehensive 40+ hours of hands-on training in core AWS cloud services, VPC networking, EC2 compute scaling, S3 storage, RDS multi-AZ deployments, IAM security policies, and high-availability architecture design.",
    icon: "cloud-lightning",
    color: "from-amber-500 to-orange-500",
    tags: ["AWS VPC", "EC2", "S3", "RDS", "IAM", "Cloud Architecture"]
  },
  {
    id: "sih",
    title: "Top 5 Finalist — Smart India Hackathon 2024",
    issuer: "Ministry of Education & Innovation Cell, Govt. of India",
    date: "College Round 2024",
    highlight: "Top 5 / 20+ Teams",
    description: "Competed in an intense 36-hour non-stop engineering sprint against 20+ teams. Designed, architected, and presented a production-ready working prototype solving real-world challenges, earning a top 5 finalist rank.",
    icon: "award",
    color: "from-purple-500 to-indigo-500",
    tags: ["36-Hour Hackathon", "Rapid Prototyping", "Full-Stack", "Team Leadership"]
  },
  {
    id: "dsa",
    title: "200+ Data Structures & Algorithms Problems Solved",
    issuer: "LeetCode • GeeksforGeeks • HackerRank • InterviewBit",
    date: "Active 2023 - Present",
    highlight: "200+ Solved",
    description: "Consistently sharpening algorithmic intuition across arrays, two pointers, binary search, trees, graphs, backtracking, and dynamic programming to write optimal, memory-conscious, high-performance code.",
    icon: "code",
    color: "from-emerald-500 to-teal-500",
    tags: ["Arrays", "Binary Trees", "Graphs", "Dynamic Programming", "LeetCode"]
  }
];

export const terminalCommands = {
  help: "Available commands: whoami, tech, projects, education, certs, stats, clear, contact",
  whoami: "Atharva Pachpute | Full-Stack Software Engineer & Distributed Systems Enthusiast from Pune, India.",
  tech: "Java, Spring Boot, Spring Security, REST APIs, Redis, PostgreSQL, React.js, Tailwind CSS, Docker, AWS.",
  projects: "1. FinNova AI (Gemini AI + Spring Boot SaaS)\n2. URL Shortener Service (Redis Cache-Aside, <25ms)\n3. AlgoVision (Interactive DSA Visualizer)",
  education: "B.E. in Information Technology (Expected 2026) | PES Modern College of Engineering (SPPU) | CGPA: 8.01/10",
  certs: "AWS Academy Graduate (Cloud Architecting) | Top 5 Finalist SIH 2024 | 200+ DSA Solved",
  stats: "• 200+ DSA Problems\n• 80% DB lookup reduction with Redis\n• 99% production uptime\n• 8.01 CGPA",
  contact: "Email: atharvapachpute6@gmail.com | Phone: +91-93090 38873 | GitHub: SyntaxNova | LinkedIn: atharva-pachpute3"
};
