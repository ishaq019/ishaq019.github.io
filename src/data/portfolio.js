export const profile = {
  name: "Syed Ishaq",
  role: "MERN / React Developer",
  email: "syedishaq0000786@gmail.com",
  phone: "+91 70753 20283",
  phoneHref: "+917075320283",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/ishaq019",
  linkedin: "https://www.linkedin.com/in/s-ishaq/",
  resume: "/assets/syed-ishaq-resume.pdf",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "React.js", "React Hooks", "Context API", "Axios", "Tailwind CSS"],
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JSON", "JSON Web Token (JWT)", "Zod", "Multer", "NLTK"],
  },
  {
    title: "Database and Tools",
    skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "npm", "Vercel", "GitHub Pages", "Electron.js"],
  },
  {
    title: "Relevant Coursework",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Software Engineering",
      "Software Development Life Cycle (SDLC)",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Intern",
    company: "Leap Robots LLP",
    logo: "/assets/leap-robots-logo.png",
    period: "Jun 2026 — Present",
    location: "Hyderabad, Telangana",
    description:
      "Building and testing web-to-desktop product modules that connect software with robotics hardware.",
    highlights: [
      "Converting web application workflows into desktop modules using Electron.js, Node.js, and JavaScript.",
      "Debugging UI behavior, runtime issues, application flow, and hardware communication.",
      "Working with microcontrollers through serial communication and backend device-control logic.",
    ],
    technologies: ["Electron.js", "Node.js", "JavaScript", "Serial Communication", "Testing"],
  },
  {
    role: "Software Development Intern",
    company: "DigiVal IT Solutions Private Limited",
    logo: "/assets/digival-logo.png",
    period: "May 2026 — Jun 2026",
    location: "Chennai, Tamil Nadu",
    description:
      "Developed and maintained MERN application features, backend workflows, and REST APIs.",
    highlights: [
      "Built features with React.js, Node.js, Express.js, MongoDB, and JavaScript.",
      "Worked on asynchronous file operations, uploads, and image-processing workflows.",
      "Contributed to code reviews, debugging, testing, and issue resolution.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Multer"],
  },
];

export const education = [
  {
    institution: "KSRM College of Engineering",
    qualification: "Bachelor of Technology — Computer Science Engineering",
    period: "Aug 2022 — Apr 2026",
    result: "CGPA: 9.03 / 10",
  },
  {
    institution: "Narayana Junior College",
    qualification: "Intermediate — Mathematics, Physics, Chemistry",
    period: "Jul 2020 — May 2022",
    result: "Score: 81%",
  },
  {
    institution: "Sree Santiniketan E.M High School",
    qualification: "Secondary School Certificate",
    period: "Mar 2020",
    result: "GPA: 8.5 / 10",
  },
];

export const projects = [
  {
    title: "Digital ID Card Management Platform",
    image: "/assets/projects/digital-id-card.webp",
    description:
      "Built a MERN platform with protected admin access, reusable templates, dynamic fields, live front/back previews, QR codes, and PNG/PDF export. Replaced an unreliable Base64 image flow with Google Drive storage and added Google Forms webhook automation.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Drive API", "Multer"],
    source: "https://github.com/ishaq019/ID-Generator",
    live: "https://syedishaq.me/ID-Generator",
    featured: true,
  },
  {
    title: "TalentTrack — LMS & Assessment Management System",
    image: "/assets/projects/talenttrack.webp",
    description:
      "Created a role-based assessment platform with student and admin dashboards, OTP verification, JWT authentication, assignments, practice tests, coding evaluation, automated scoring, analytics, and result emails.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Zod", "Nodemailer"],
    source: "https://github.com/ishaq019/TalentTrack-LMS-Assessment-Management-System",
    live: "https://syedishaq.me/TalentTrack-LMS-Assessment-Management-System/",
    featured: true,
  },
  {
    title: "Food Delivery Platform",
    image: "/assets/projects/food-delivery.webp",
    description:
      "Developed a MERN food-ordering application with customer and admin experiences, JWT authentication, cart and order management, and Stripe payment integration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    source: "https://github.com/ishaq019/Food-Delivery-Platform",
    live: "https://syedishaq.me/Food-Delivery-Platform",
  },
  {
    title: "Automated Intelligent Ticketing System",
    image: "/assets/projects/automated-ticketing.webp",
    description:
      "Built an AI-assisted support desk with asynchronous ticket triage, priority and tag extraction, skill-based moderator routing, role-based access, and email notifications.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Inngest", "Google Gemini"],
    source: "https://github.com/ishaq019/Automated-Intelligent-Ticketing-System",
    live: "https://syedishaq.me/Automated-Intelligent-Ticketing-System",
  },
  {
    title: "Stock Prediction Portal",
    image: "/assets/projects/stock-prediction.webp",
    description:
      "Created a stock analytics dashboard with JWT authentication, real-time charts, watchlist management, and API-driven price forecasting using Linear Regression and LSTM models.",
    technologies: ["React.js", "Django REST", "JWT", "Linear Regression", "LSTM"],
    source: "https://github.com/ishaq019/Stock-Prediction-Portal",
    live: "https://syedishaq.me/Stock-Prediction-Portal",
  },
  {
    title: "Customer Shopping Trends & Revenue Analysis",
    image: "/assets/projects/customer-shopping.webp",
    description:
      "Analyzed more than 3,900 retail records using Python ETL, feature engineering, advanced SQL, and an interactive Power BI dashboard with DAX KPIs for revenue and customer insights.",
    technologies: ["Python", "SQL", "Power BI", "DAX", "ETL"],
    source: "https://github.com/ishaq019/Customer-Shopping-Trends-Revenue-Analysis-System-",
    live: null,
  },
  {
    title: "Fake News Detection System",
    image: "/assets/projects/fake-news.webp",
    description:
      "Developed a React and FastAPI application that classifies news text in real time using TF-IDF unigram and bigram features with Logistic Regression.",
    technologies: ["React.js", "FastAPI", "NLP", "TF-IDF", "Logistic Regression"],
    source: "https://github.com/ishaq019/Fake-News-Detection-System",
    live: "https://syedishaq.me/Fake-News-Detection-System",
  },
];

export const certifications = [
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    verify:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4926C861C338419EFED779F6BF4F1101E6EE9A9FDEA3FBFED45F84AE65A3AD59",
  },
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    verify:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=22ABFBDDB61369B17A5280ACEE57BAA703CC43081F098B064F9508291779CE42",
  },
  {
    title: "Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    verify: "https://www.credly.com/badges/e7c46cb4-1b04-41b6-bdac-6112c5eb0d88/public_url",
  },
  {
    title: "Introduction to Linux",
    issuer: "Linux Foundation via edX",
    verify: "https://courses.edx.org/certificates/f9eb05c3aa6c48eabd0e8be35d621fb2",
  },
];
