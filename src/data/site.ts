/**
 * Single source of truth for every piece of content on the site.
 *
 * Derived strictly from Om Kumar's resume and technical background:
 * Education at MMMUT Gorakhpur, MERN stack development, C++/DSA, LeetCode (_omrajora),
 * and production full-stack projects (FinSight, LocalKart).
 */

/* -------------------------------------------------------------------------- */
/* Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Om Kumar",
  initials: "OM",
  /** Shown as the hero role stack + footer tagline. */
  roles: ["Full-Stack Developer", "AI/ML Enthusiast", "C++ / DSA"],
  tagline: "Full-Stack Developer • AI/ML Enthusiast",
  headline: "Building Digital Products with Code & Intelligence.",
  /** The word inside `headline` that receives the accent treatment. */
  headlineAccent: "Intelligence.",
  intro:
    "Third-year Computer Science undergraduate at MMMUT Gorakhpur with a strong foundation in Data Structures & Algorithms and hands-on experience across the MERN full-stack (React.js, Node.js, Express.js, MongoDB). Building skills in Artificial Intelligence & Machine Learning alongside coursework, and independently architecting end-to-end production web applications.",
  location: "Ghaziabad, Uttar Pradesh, India",
  phone: "+91-7454014740",
  email: "omrajora671@gmail.com",
  github: "https://github.com/omrajora",
  linkedin: "https://www.linkedin.com/in/om-kumar-767785324/",
  leetcode: "https://leetcode.com/u/_omrajora/",
  githubHandle: "omrajora",
  leetcodeHandle: "_omrajora",
  photo: "/om-photo.jpg",
  /** Placed at `public/Om-Kumar-Resume.pdf`. */
  resumeFile: "/Om-Kumar-Resume.pdf",
  availability: "Open to SDE / Full-Stack / AI-ML internships",
} as const;

export const siteUrl = "https://omkumar.dev";

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "LeetCode", href: profile.leetcode, icon: "leetcode" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About",
  title: "Engineer first, framework second.",
  paragraphs: [
    "I'm Om Kumar, a third-year B.Tech Computer Science student at Madan Mohan Malaviya University of Technology, Gorakhpur. Most of what I know came from building software end to end — designing clean database schemas, wiring robust RESTful APIs, and crafting intuitive, responsive user interfaces.",
    "My core stack is MERN: React.js on the frontend, Node.js and Express.js for backend services, with MongoDB Atlas and MySQL for persistent data storage. I focus heavily on solid architectural fundamentals — clean data models, JWT authentication with OAuth/2FA, and granular role-based access control.",
    "Alongside web engineering, I work with Python for machine learning and data analysis. I'm drawn to products that combine full-stack engineering with intelligent decision-making — like expense forecasting and anomaly detection in FinSight or scalable e-commerce workflows in LocalKart.",
    "Underpinning all of it is consistent problem solving in C++ on LeetCode (_omrajora). Strong fundamentals in Data Structures & Algorithms guide how I evaluate complexity, efficiency, and system scalability.",
  ],
  /** Recruiter-facing statement of intent. */
  seeking: {
    title: "What I'm looking for",
    body: "Software engineering internship and entry-level opportunities where I can contribute to production full-stack web applications, scalable backend systems, or applied AI/ML engineering — and collaborate with engineers who take code quality seriously.",
  },
  facts: [
    { label: "Education", value: "B.Tech CSE — MMMUT Gorakhpur" },
    { label: "Period", value: "Sept 2024 – May 2028 (Third Year)" },
    { label: "CGPA", value: "7.76 / 10.0" },
    { label: "Focus", value: "Full-Stack Web Development · Applied AI/ML" },
    { label: "Core Stack", value: "C++ (DSA), JavaScript (MERN), Python (AI/ML)" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Skills — badges strictly reflecting the resume                              */
/* -------------------------------------------------------------------------- */

export type SkillCategory = {
  title: string;
  blurb: string;
  icon: string;
  items: string[];
  /** Controls the bento span on large screens. */
  span?: "wide" | "normal";
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    blurb: "Core programming and scripting languages.",
    icon: "code",
    items: ["C++", "Python", "JavaScript", "SQL", "HTML", "CSS"],
    span: "wide",
  },
  {
    title: "Frameworks & Tools",
    blurb: "Full-stack development and containerization.",
    icon: "server",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Docker",
      "Git",
      "GitHub",
    ],
    span: "wide",
  },
  {
    title: "Databases",
    blurb: "Cloud database and schema design.",
    icon: "database",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "Database Design"],
  },
  {
    title: "AI / ML",
    blurb: "Intelligent analytics and learning systems.",
    icon: "sparkles",
    items: [
      "Machine Learning fundamentals",
      "Data Analysis",
      "Recommendation Systems",
      "AI-driven Analytics",
    ],
    span: "wide",
  },
  {
    title: "Core CS & Architecture",
    blurb: "Fundamental software engineering principles.",
    icon: "cpu",
    items: [
      "Data Structures & Algorithms (DSA)",
      "DBMS",
      "Object-Oriented Programming (OOPs)",
      "REST API Design",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
    span: "wide",
  },
];

/** Compact strip under the hero — instant scan. */
export const techStrip = [
  "C++",
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "MongoDB Atlas",
  "MySQL",
  "Docker",
  "Git & GitHub",
  "Data Structures & Algorithms",
  "LeetCode: _omrajora",
  "DBMS & OOPs",
  "REST APIs & JWT",
  "AI & Machine Learning",
];

/* -------------------------------------------------------------------------- */
/* Projects — ONLY FinSight and LocalKart                                     */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  index: string;
  name: string;
  kicker: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  /** Drives the abstract SVG preview rendered inside the card. */
  visual: "finance" | "commerce" | "match" | "portfolio";
};

export const projects: Project[] = [
  {
    id: "finsight",
    index: "01",
    name: "FinSight",
    kicker: "AI-Powered Personal Finance & Expense Tracker",
    problem:
      "Traditional expense trackers only record past numbers without proactive forecasting or intelligent detection of unusual spending behaviors.",
    solution:
      "Engineered a full-stack expense tracker using React.js, Node.js, Express.js, and MongoDB Atlas, supporting real-time transaction logging, multi-layered JWT/Google OAuth/2FA authentication, AI expense forecasting, anomaly detection, and a conversational chat assistant.",
    features: [
      "Real-time transaction logging and categorization",
      "Multi-layered authentication (JWT, Google OAuth, 2FA)",
      "AI-driven analytics module for expense forecasting",
      "Automated anomaly detection for suspicious transactions",
      "Conversational AI chat assistant for personalized financial insights",
      "MongoDB Atlas cloud synchronization",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
      "Google OAuth",
      "AI/ML",
    ],
    github: "https://github.com/omrajora/finsight",
    demo: "https://finsight-gilt-phi.vercel.app",
    featured: true,
    visual: "finance",
  },
  {
    id: "localkart",
    index: "02",
    name: "LocalKart",
    kicker: "Digital Marketplace Platform",
    problem:
      "Local sellers and shoppers need a unified platform where inventory, orders, and permissions are cleanly separated between buyers and store administrators.",
    solution:
      "Architected a full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB, featuring Role-Based Access Control (RBAC) with dedicated Admin and Customer dashboards and integrated RESTful APIs.",
    features: [
      "End-to-end product listing, cart, and order management flows",
      "Role-Based Access Control (RBAC) architecture",
      "Separate Admin and Customer dashboards for permission-scoped operations",
      "RESTful APIs connecting frontend, backend, and MongoDB Atlas",
      "Real-time data sync across the platform with responsive UI",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "RBAC",
    ],
    github: "https://github.com/omrajora/localkart",
    demo: "https://localkart-n25o.onrender.com",
    featured: true,
    visual: "commerce",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);

/* -------------------------------------------------------------------------- */
/* Achievements — Key Achievements from resume                                */
/* -------------------------------------------------------------------------- */

export const achievements = {
  highlight: {
    title: "Full-Stack Production Applications",
    tag: "Architecture to Deployment",
    body: "Built and shipped 3 full-stack production applications independently from scratch — handling database design, RESTful APIs, authentication, responsive UI, and cloud deployment.",
    icon: "trophy",
  },
  items: [
    {
      title: "Coding Competitions & DSA",
      body: "Actively engaged in coding competitions and technical problem-solving on LeetCode (_omrajora) with strong algorithmic foundations in C++.",
      icon: "terminal",
    },
    {
      title: "Hackathons & Innovation Events",
      body: "Participated in hackathons and team-based innovation events, rapidly developing working prototypes against real-world problem statements.",
      icon: "zap",
    },
    {
      title: "Workshops & Technical Events",
      body: "Attended technical workshops, technical events, and collaborative engineering sessions to continually sharpen development and system design skills.",
      icon: "users",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "Sept 2024 – May 2028",
    grade: "CGPA: 7.76 / 10.0",
    status: "Third year",
    detail:
      "Core coursework in Data Structures & Algorithms, DBMS, Object-Oriented Programming (OOPs), and Machine Learning, applied through independent production full-stack projects.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  eyebrow: "Contact",
  title: "Have an opportunity or project in mind?",
  body: "I'm actively seeking software engineering internships, entry-level developer roles, and opportunities to build production web applications or applied AI/ML systems. Feel free to reach out via email, check my LeetCode, or connect on LinkedIn.",
  channels: [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "mail",
      note: "Direct communication",
    },
    {
      label: "LeetCode",
      value: `leetcode.com/u/${profile.leetcodeHandle}`,
      href: profile.leetcode,
      icon: "leetcode",
      note: "Problem Solving Profile",
    },
    {
      label: "GitHub",
      value: `github.com/${profile.githubHandle}`,
      href: profile.github,
      icon: "github",
      note: "Source repositories",
    },
    {
      label: "LinkedIn",
      value: "in/om-kumar-767785324",
      href: profile.linkedin,
      icon: "linkedin",
      note: "Professional network",
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
      icon: "phone",
      note: "Direct call",
    },
  ],
} as const;
