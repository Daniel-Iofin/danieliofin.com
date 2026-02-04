'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {/*{
      title: 'Software Engineer Intern',
      company: 'Point One',
      location: 'New York, NY',
      period: 'Summer 2025',
      description: 'Developed analytics dashboard to measure customer engagement',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Python', 'Flask'],
      link: 'https://pointone.com'
    },*/}
  ]

  return (
    <section id="experience" className="section-padding bg-gray-900/20">
      <div className="container-max">
        {/*<motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-blue-400 transition-colors duration-200 mt-2 md:mt-0"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Visit Company
                  </a>
                )}
              </div>
              
              <p className="text-gray-300 mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}

export default Experience 