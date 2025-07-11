'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Globe, Smartphone, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Daniel-Iofin/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'web'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/Daniel-Iofin/task-manager',
      live: 'https://task-manager-demo.com',
      category: 'web'
    },
    {
      title: 'Fitness Tracking Mobile App',
      description: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with data visualization.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo'],
      github: 'https://github.com/Daniel-Iofin/fitness-app',
      live: null,
      category: 'mobile'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts, interactive maps, and historical data visualization.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Vuex', 'CSS Grid'],
      github: 'https://github.com/Daniel-Iofin/weather-app',
      live: 'https://weather-dashboard.com',
      category: 'web'
    }
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
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <CategoryIcon className="w-16 h-16 text-gray-600" />
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
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