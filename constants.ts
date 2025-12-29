
import { Project, Education, Achievement, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "Vedant Yeola",
  phone: "+91 7666340113",
  email: "vedantyeola16@gmail.com",
  profile: "Software developer who builds reliable and efficient applications. Good at understanding requirements, solving problems, and delivering features that improve user experience.",
  links: {
    github: "https://github.com/VedantYeola",
    linkedin: "https://www.linkedin.com/in/Vedant-Yeola-b477b8268",
    portfolio: "#"
  }
};

// ============================================
// PROJECT LINKS: Update the 'github' field for each project below
// Format: Use full GitHub URL like "https://github.com/YourUsername/RepoName"
// ============================================
export const PROJECTS: Project[] = [
  {
    title: "AI MOCK INTERVIEW PLATFORM",
    github: "https://github.com/VedantYeola/AI-MOCKER.git", // TODO: Update with actual GitHub repo URL
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Neon DB", "Drizzle ORM", "Clerk", "Gemini AI", "ShadCN"],
    period: "March 2025 – April 2025",
    location: "pune",
    description: "An AI-powered web platform that simulates real interview scenarios with dynamic question generation, real-time speech recognition, and instant feedback. Features include user authentication and a responsive UI."
  },
  {
    title: "AI TRIP PLANNER WEB APPLICATION",
    github: "https://github.com/VedantYeola/ai-trip-planner-web.git", // TODO: Update with actual GitHub repo URL
    stack: ["React", "Tailwind CSS", "Firebase", "Google Gemini API", "Google OAuth", "Firebase Hosting"],
    period: "May 2025 – June 2025",
    location: "pune",
    description: "Developed an AI-powered travel planner using React, Firebase, and Google Gemini to generate personalized itineraries based on user preferences."
  },
  {
    title: "SCALABLE-GO-API",
    github: "https://github.com/VedantYeola/Scalable-GO-API.git", // TODO: Update with actual GitHub repo URL
    stack: ["Golang", "Docker", "Postgres"],
    period: "Nov 2025 – OnGoing",
    location: "pune",
    description: "Architecting a highly scalable backend API using Golang and containerization techniques for optimized performance."
  },
  {
    title: "STOCK PRICE PREDICTION",
    github: "https://github.com/VedantYeola/profitpuls.git", // TODO: Update with actual GitHub repo URL
    stack: ["Python", "Streamlit", "PostgreSQL"],
    period: "March 2024 – April 2024",
    location: "Pune",
    description: "Created a Website User Interface which is used to visualize and predict stock prices using historical data and Machine Learning Algorithms, providing detailed predicated charts."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "SIR PARASHURAMBHAU COLLEGE",
    degree: "MSc in Computer Science",
    score: "CGPA: 9.00",
    period: "2024 - ongoing",
    location: "Pune"
  },
  {
    institution: "SIR PARASHURAMBHAU COLLEGE",
    degree: "BSc in Computer Science",
    score: "CGPA: 7.63",
    period: "2021 - 2024",
    location: "Pune"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Golang", "Javascript", "Typescript"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Jenkins", "Kubernetes", "Ansible", "Terraform(IAC)", "SonarQube"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Neon Tech", "Firebase"]
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Next.js", "Streamlit", "FastAPI", "MLflow", "Latex", "Slack"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Completed Certificate Course in Python" },
  { title: "Completed Certificate Course in Web Development" },
  { title: "Python Programming powered by Wipro DICE ID" },
  { title: "AWS Educate Introduction to Generative AI - Training Badge" },
  { title: "AWS Educate Introduction to Cloud 101 - Training Badge" }
];
