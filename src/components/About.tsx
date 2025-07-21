
import { GraduationCap, Heart } from 'lucide-react';

const stats = [
  { icon: <GraduationCap />, value: 'Northeastern University, Boston, MA', label: 'Master of Science in Information Systems', duration: 'Expected Dec 2026' },
   { icon: <GraduationCap />,  value: 'Bangalore Institute of Technology, Bangalore, India', label: 'Master of Computer Applications', duration: 'Aug 2013 - Aug 2016'},
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
            I’m an Experienced full-stack developer and graduate student at <b>Northeastern University, Boston</b>, with over seven years of experience building 
            reliable, user-focused software solutions. I specialize in crafting end-to-end applications from designing seamless user 
            experiences to architecting efficient, scalable backends. Throughout my career, I’ve contributed to diverse projects across 
            industries, delivering impactful solutions that improve performance, enhance usability, and streamline operations. I take pride 
            in writing clean, maintainable code, following best practices, and building systems that are both robust and adaptable to change.

            I thrive in collaborative, fast-paced environments where innovation meets execution. Whether it's solving complex problems, 
            improving development workflows, or driving product quality, I bring a hands-on, results-driven approach to every challenge.
            Curious by nature and committed to continuous learning, I’m always exploring new ideas and pushing the boundaries of what 
            software can do.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              My journey in web development started when I built my first website
              in college. Since then, I've been constantly learning and improving
              my skills to stay up-to-date with the latest technologies and best practices.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
              <p className="text-lg font-medium">
                "I believe in writing clean, maintainable code and creating intuitive
                user experiences that make a difference."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img src="YatishAbout.png"
                alt="About Me"
                className="rounded-lg shadow-xl animate-fade-in centre"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="lg:col-span-2 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-block p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-1xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                   <div className="text-gray-600 dark:text-gray-300">{stat.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}