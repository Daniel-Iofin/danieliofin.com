'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    // Programming Languages (Blue tones)
    { name: 'Python', category: 'languages', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'C++', category: 'languages', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
    { name: 'JavaScript', category: 'languages', color: 'bg-blue-700/20 text-blue-300 border-blue-700/30' },
    { name: 'TypeScript', category: 'languages', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'HTML+CSS', category: 'languages', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
    { name: 'Java', category: 'languages', color: 'bg-blue-700/20 text-blue-300 border-blue-700/30' },
    { name: 'Julia', category: 'languages', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    { name: 'Rust', category: 'languages', color: 'bg-blue-600/20 text-blue-300 border-blue-600/30' },
    
    // Frontend Technologies (Cyan tones)
    { name: 'React', category: 'frontend', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { name: 'Next.js', category: 'frontend', color: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30' },
    { name: 'Vue.js', category: 'frontend', color: 'bg-cyan-700/20 text-cyan-300 border-cyan-700/30' },
    { name: 'Redux', category: 'frontend', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { name: 'GraphQL', category: 'frontend', color: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30' },
    { name: 'Webpack', category: 'frontend', color: 'bg-cyan-700/20 text-cyan-300 border-cyan-700/30' },
    { name: 'Vite', category: 'frontend', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
    { name: 'Tailwind CSS', category: 'frontend', color: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30' },
    
    // Backend Technologies (Green tones)
    { name: 'Node.js', category: 'backend', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
    { name: 'Express.js', category: 'backend', color: 'bg-green-600/20 text-green-300 border-green-600/30' },
    { name: 'PostgreSQL', category: 'backend', color: 'bg-green-700/20 text-green-300 border-green-700/30' },
    { name: 'MongoDB', category: 'backend', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
    { name: 'Firebase', category: 'backend', color: 'bg-green-600/20 text-green-300 border-green-600/30' },
    
    // Mobile & Cross-platform (Purple tones)
    { name: 'React Native', category: 'mobile', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
    { name: 'Flutter', category: 'mobile', color: 'bg-purple-600/20 text-purple-300 border-purple-600/30' },
    { name: 'iOS & Android Development', category: 'mobile', color: 'bg-purple-700/20 text-purple-300 border-purple-700/30' },
    
    // DevOps & Cloud (Orange tones)
    { name: 'Docker', category: 'devops', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
    { name: 'AWS', category: 'devops', color: 'bg-orange-600/20 text-orange-300 border-orange-600/30' },
    { name: 'Vercel', category: 'devops', color: 'bg-orange-700/20 text-orange-300 border-orange-700/30' },
    { name: 'Netlify', category: 'devops', color: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
    { name: 'GitHub Actions', category: 'devops', color: 'bg-orange-600/20 text-orange-300 border-orange-600/30' },
    
    // Tools & Others (Gray tones)
    { name: 'Git', category: 'tools', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
    { name: 'VS Code', category: 'tools', color: 'bg-gray-600/20 text-gray-300 border-gray-600/30' },
    { name: 'Figma', category: 'tools', color: 'bg-gray-700/20 text-gray-300 border-gray-700/30' },
    { name: 'Postman', category: 'tools', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
    { name: 'Jest', category: 'tools', color: 'bg-gray-600/20 text-gray-300 border-gray-600/30' },
    { name: 'npm', category: 'tools', color: 'bg-gray-700/20 text-gray-300 border-gray-700/30' },
    { name: 'yarn', category: 'tools', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
    
    // Spoken Languages (Teal tones)
    { name: 'English', category: 'spoken', color: 'bg-teal-500/20 text-teal-300 border-teal-500/30' },
    { name: 'Russian', category: 'spoken', color: 'bg-teal-600/20 text-teal-300 border-teal-600/30' },
    { name: 'Spanish', category: 'spoken', color: 'bg-teal-700/20 text-teal-300 border-teal-700/30' },
    
    // And More (Indigo tones)
    { name: 'and more...', category: 'more', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a software engineer with a passion for creating innovative solutions that make a difference. 
                With expertise in full-stack development, I specialize in building scalable web applications 
                and mobile experiences.
              </p>
              <p>
                My journey into tech started with an ML class during covid lockdowns, 
                and has since evolved into a six year career focused on solving real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me reading, swimming, playing water polo or hanging out with friends :)
              </p>
            </motion.div>
          </div>

          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h2>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className={`px-4 py-2 text-sm rounded-full border ${skill.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  title={skill.category}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 