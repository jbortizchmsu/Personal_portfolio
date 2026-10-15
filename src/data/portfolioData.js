/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this file to customize all content displayed on your website.
 * Update names, descriptions, links, project details, skills, and experience items.
 */

export const portfolioData = {
  // Personal Details
  personal: {
    name: "Jobert B. Ortiz Jr.", // <-- REPLACE with your name
    role: "Aspiring Full-Stack Developer & Database Designer", // <-- REPLACE with your role/tagline
    headline: "Hi, I'm Jobert Ortiz.", // <-- REPLACE with your hero greeting
    heroTagline: "A passionate Full-Stack Developer & Database Designer crafting modern, accessible web applications and efficient data systems.", // <-- Hero subtitle
    bio: [
      "Motivated and detail-oriented Information Systems student seeking an opportunity to apply my skills in programming and web and mobile application development. I aim to build reliable and efficient software solutions while continuously improving my technical and problem-solving abilities."
    ],
    email: "jbortiz.chmsu@gmail.com", // <-- REPLACE with your email
    location: "Talisay City, Philippines", // <-- Optional location
    resumeUrl: "/resume.pdf", // <-- Place your resume PDF in the public/ folder

    // Profile photo used in Hero section
    // Replace with your photo path (e.g. '/profile.jpg' in public/ or external URL)
    photo: "/7f0743db-259c-4b2c-9a28-a088282d0a4f.jpg",

    // Image used in About section
    aboutImage: "/7f0743db-259c-4b2c-9a28-a088282d0a4f.jpg",
  },

  // Social Media Links (used in Footer and Contact)
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ortiz-jobert-jr-b-8913a4354/?isSelfProfile=true", // <-- REPLACE
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/jbortizchmsu", // <-- REPLACE
      icon: "Github",
    },
    {
      name: "Email",
      url: "[EMAIL_ADDRESS]",
      icon: "Mail",
    },
  ],

  // Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // Projects Grid (Wireframe specifies 3 ProjectCard components)
  projects: [
    {
      id: "project-1",
      title: "JD Car-Rental System",
      description: "A full-featured car-rental system with real-time updates, booking management, and client history tracking.",
      image: "/Screenshot 2026-10-16 045756.png",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://www.jdcarrental.store/", // <-- REPLACE with live demo link
      repoUrl: "https://github.com/jbortizchmsu/Car_Rental", // <-- REPLACE with repo link
    },

  ],

  // Skills Chips / Badges (Matches the 7 pills layout in wireframe)
  skills: [
    { name: "React 18", level: "Intermediate", category: "Frontend" },
    { name: "JavaScript (ES6+)", level: "Intermediate", category: "Core" },
    { name: "Tailwind CSS", level: "Intermediate", category: "Styling" },
    { name: "Node.js & Express", level: "Intermediate", category: "Backend" },
    { name: "PostgreSQL & MySQL", level: "Intermediate", category: "Database" },
    { name: "RESTful API Design", level: "Intermediate", category: "Architecture" },
    { name: "Git & Version Control", level: "Intermediate", category: "DevOps" },
  ],

  // Experience & Education (Vertical timeline matching wireframe)
  timeline: [
    {
      id: "exp-1",
      role: "Bachelor of Science in Information Technology (4th Year)",
      organization: "Carlos Hilado Memorial State University (CHMSU)",
      period: "2026 - Present (4th Year)",
      type: "Education",
      description: "Currently in 4th year of study. Focusing on software engineering, web and mobile application development, database management systems, and systems analysis & design.",
    },

    {
      id: "exp-3",
      role: "Senior High School - TVL / ICT Strand",
      organization: "Basic Education Department",
      period: "2021 - 2023",
      type: "Education",
      description: "Graduated with honors. Developed foundational competencies in computer programming, technical support, and introductory database concepts.",
    },
  ],
};
