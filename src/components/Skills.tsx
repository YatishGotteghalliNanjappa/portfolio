import React from 'react';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  GitBranch,
  Terminal,
  Cloud,
  Settings
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  techStack: string[];
  category: string;
}

const skills: Skill[] = [
  { name: 'Frontend Development', icon: <Layout />,techStack: ["Html5", "Css3", "Bootstrap3", "Javascript (ES6+)", "Jquery", "Sass", "ReactJs", "Redux", "Typescript", "Angular", "Axios" ], category: 'Development' },
  { name: 'Backend Development', icon: <Server />, techStack: ["Express.js", "Node.js", "Java", "J2EE", "Spring MVC", "SpringBoot", "Microservices", "JPA", "Hibernate", "Python"], category: 'Development' },
  { name: 'Database', icon: <Database />, techStack: ["MySql", "Oracle", "MongoDB", "PlSql"], category: 'Development' },
  { name: 'Others', icon: <Settings />, techStack: ["Jenkins", "Jira", "Postman","REST API", "Elk Stack", "Docker", "Kubernetes", "Git", "Tortoise SVN" ,"IBM Cognos", "OpenAI","Gemini 2.0", "AWS (S3, EC2, Code Commit)", "GCP","Terraform",  "Redis", "Solr", "Eclipse IDE", "Visual Studio", "IntelliJ IDE", "MySql Workbench"], category: 'Development' },
  // { name: 'Version Control', icon: <GitBranch />, level: 95, category: 'Tools' },
  // { name: 'Cloud Services', icon: <Cloud />, level: 70, category: 'Tools' },
  // { name: 'Command Line', icon: <Terminal />, level: 85, category: 'Tools' },
  // { name: 'Problem Solving', icon: <Code2 />, level: 90, category: 'Soft Skills' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}