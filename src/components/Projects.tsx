import  { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCategory = 'All' |'Professional Projects' |'Academic Projects';

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  //techStack: string[];
  // demoLink: string;  
  // githubLink: string;
}

const projects: Project[] = [
  {
    title: "Warranty Management System",
    description: "As a Software Engineer, I contributed to the development of a robust Warranty Management System designed to streamline and automate the entire warranty lifecycle. The platform enabled users to register products, submit and track claims, and manage warranty policies with ease.My work focused on building scalable components that supported features like real-time claim validation, automated approvals, and seamless integration with inventory and service modules. The system also provided actionable insights through dashboards and reporting tools, helping businesses reduce claim fraud, enhance customer satisfaction, and optimize operational efficiency.",
    image: "cumminslogo.png",
    category: "Professional Projects",
   /* techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#", 
    githubLink: "#"*/
  },
  {
    title: "E-Commerce Platform - Order Desk",
    description: "OrderDesk™ is a web application built for SMEs to manage the complete order lifecycle and strengthen business relationships. It centralizes processes like order tracking, sales interest capture, payment management, and vendor coordination. Designed to solve SME operational challenges, it reduces manual effort and improves process visibility. The platform includes real-time dashboards and reports, enabling data-driven decisions. With scalable architecture and integrated workflow automation, OrderDesk™ supports business growth, enhances collaboration, and increases operational efficiency across a variety of industries.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    category: "Professional Projects",
   /* techStack: ["React", "Node.js", "MongoDB", "Stripe"],
     demoLink: "#", 
    githubLink: "#" */
  },
  {
    title: "Black Ticket - Restaurant Management Platform",
    description: "Developed BlackTicket, a mobile solution (Android) for guests to discover restaurants, reserve tables, request service, pay bills, and retrieve valet-parked vehicles. Built staff-facing tools for real-time management of reservations, requests, menus, and feedback. Enabled managers with operational insights and owners with CRM-driven promotions. Led end-to-end development, including business planning, hiring, and roadmap. Integrated with iDine POS and multiple payment providers for seamless menu, order, and transaction management.",
    image: "BlackTicket.png",
    category: "Professional Projects",
    /*techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
     demoLink: "#", 
    githubLink: "#" */
  },
  {
    title: "BudgetBuddy - Personal Finance Management Application",
    description: "BudgetBuddy is a personal finance management application that enables users to efficiently track expenses, set budgets, and gain insights into their spending patterns. The platform features a user-friendly interface designed to simplify financial tracking and encourage smarter budgeting habits. Users can categorize transactions, monitor budget limits, and visualize their financial data through interactive charts and summaries. BudgetBuddy empowers individuals to make informed decisions, improve savings, and take control of their personal finances with ease and clarity.",
    image: "BudgetBuddy.png",
    category: "Academic Projects",
    /*techStack: ["ReactJS","Redux","Axios","Material UI", "ChartJS", "Express.js","Node.js","JWT ","bcryptjs","Mongoose"],
     demoLink: "#",  
    githubLink: "#" */
  },
  {
    title: "MeetSync - Real Time Meeting Transcription and Summary Web App",
    description: "Meet & Sync is a full-stack web application that enhances online meetings by offering real-time audio transcription, AI-generated summaries, and interactive chat with transcripts. Users log in securely with Google OAuth and connect their Google Calendar. During meetings, the app captures audio, transcribes it every 30 seconds using speech-to-text APIs, and enables users to query the transcript with AI. After each session, MeetSync presents structured meeting summaries. The backend handles authentication, audio processing, and secure data storage with robust error handling for login, transcription, and API issues.",
    image: "MeetSync.jpg",
    category: "Academic Projects",
    /*techStack: ["Java", "SpringBoot", "MySql"],
    demoLink: "#",  
    githubLink: "#" */
  }
];

const categories: ProjectCategory[] = ['All','Professional Projects', 'Academic Projects'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }} >           
              <div className="relative h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                 className="w-[1000px] h-[170px] transition-transform duration-300 group-hover:scale-110"/>          
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  { /*project.techStack.map((tech) => (<span key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full">
                      {tech} </span> )) */}
                </div>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}