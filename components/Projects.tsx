'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Globe, Smartphone, Database } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live: string | null;
  github: string | null;
  category: string;
}

const Projects = () => {
  const projects : Project[] = [
    {
      title: 'Club Management Platform',
      description: 'Developed my high school\'s first all-in-one club management platform.  Manages 150+ clubs, sends 10,000+ emails per month, and handles 100,000+ API requests per month.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
      live: 'https://hub.trinlabs.com',
      github: null,
      category: 'web'
    },
    {
      title: 'Sticker Tag',
      description: 'Reengineered an existing community building site to be maintainable and scalable.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
      live: 'https://www.trinitystickertag.com',
      github: null,
      category: 'web'
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return Smartphone
      case 'web':
        return Globe
      default:
        return Database
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            
            return (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {project.image && project.image !== '/api/placeholder/400/250' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <CategoryIcon className="w-16 h-16 text-gray-600" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects 