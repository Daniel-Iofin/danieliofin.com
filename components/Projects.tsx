'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

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
      description: 'Developed my high school\'s first club management platform. An all-in-one solution for 150+ clubs, sends 10,000+ emails per month, and handles 100,000+ API requests per month.',
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

  const [activeProject, setActiveProject] = useState(projects[0])

  // Custom hash function that converts characters to percentages
  const getCharacterPercentage = (char: string) => {
    const charCode = char.toLowerCase().charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) { // a-z
      return ((charCode - 97) / 26) * 100;
    }
    return 50; // Default for non-letters
  }

  const getOrbPosition = (projectTitle: string, orbIndex: number) => {
    // Extend title if less than 12 characters
    let extendedTitle = projectTitle;
    while (extendedTitle.length < 12) {
      extendedTitle += projectTitle;
    }
    
    // Get the character for this orb position (x1,y1,x2,y2,x3,y3...)
    const charIndex = orbIndex * 2; // Each orb needs 2 characters (x and y)
    const xChar = extendedTitle[charIndex] || 'a';
    const yChar = extendedTitle[charIndex + 1] || 'a';
    
    // Convert characters to percentages
    const xPercent = getCharacterPercentage(xChar);
    const yPercent = getCharacterPercentage(yChar);
    
    // Map to header area (10-90% width, 15-85% height)
    const x = 10 + (xPercent / 100) * 80;
    const y = 15 + (yPercent / 100) * 70;
    
    return { x, y };
  }

  return (
    <section id="projects" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent pointer-events-none" />
      
      <div className="container-max relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 mt-12">
          {/* Left Column - Project List */}
          <div className="lg:w-1/3">
            <ul className="flex flex-col gap-4">
              {projects.map((project) => (
                <li key={project.title}>
                  <button
                    onMouseEnter={() => setActiveProject(project)}
                    className={`w-full p-6 text-left rounded-xl transition-all duration-300 border-2 ${
                      activeProject.title === project.title
                        ? 'bg-slate-800/50 border-sky-500 shadow-lg shadow-sky-500/10'
                        : 'border-transparent hover:bg-slate-800/50'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p
                      className={`text-sm mt-1 capitalize transition-colors ${
                        activeProject.title === project.title ? 'text-sky-400' : 'text-slate-400'
                      }`}
                    >
                      {project.category} Project
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:w-2/3 relative min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="h-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col">
                  {/* Animated Header */}
                  <div className="h-56 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    {/* Floating Orbs */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => {
                        // Generate deterministic positions for each orb based on project title
                        const { x, y } = getOrbPosition(activeProject.title, i);
                        
                        return (
                          <motion.div
                            key={`${activeProject.title}-orb-${i}`}
                            className={`absolute rounded-full ${
                              i % 3 === 0 ? 'bg-sky-500/20' : 
                              i % 3 === 1 ? 'bg-purple-500/20' : 'bg-emerald-500/20'
                            }`}
                            style={{
                              width: `${20 + (i * 10)}px`,
                              height: `${20 + (i * 10)}px`,
                              left: `${x}%`,
                              top: `${y}%`,
                            }}
                            animate={{
                              x: [0, 30, -20, 0],
                              y: [0, -25, 15, 0],
                              scale: [1, 1.2, 0.8, 1],
                            }}
                            transition={{
                              duration: 4 + (i * 0.5),
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2,
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{activeProject.title}</h3>
                      <p className="text-slate-300 leading-relaxed mb-6">{activeProject.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {activeProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-end space-x-4">
                        {activeProject.github && (
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-sky-400 transition-colors duration-200"
                            aria-label="GitHub repository"
                          >
                            <Github size={22} />
                          </a>
                        )}
                        {activeProject.live && (
                          <a
                            href={activeProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-slate-800/50 text-slate-200 rounded-md text-sm font-medium hover:bg-sky-500/20 hover:text-sky-300 transition-all duration-300 border border-slate-700 hover:border-sky-500/30"
                          >
                            <span>View Live</span>
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 