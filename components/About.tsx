'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { name: 'Tools', icon: Code, items: ['Git', 'Docker', 'AWS', 'Figma'] },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
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
                My journey in tech started with curiosity and has evolved into a career focused on 
                clean code, user experience, and continuous learning. I believe in the power of 
                technology to solve real-world problems and improve people's lives.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-primary mr-3" />
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 