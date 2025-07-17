'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react'

const About = () => {
  const [expandedSchool, setExpandedSchool] = useState<string | null>(null)

  const schools = [
    {
      id: 'trinity',
      name: 'Trinity School',
      location: 'New York, NY',
      period: '2022 - 2026',
      degree: 'High School Diploma',
      logo: '/trinitylogo.webp',
      description: 'A prestigious independent school in Manhattan known for academic excellence and college preparation.',
      details: [
        'Graduated with honors',
        'Member of the National Honor Society',
        'Participated in various academic clubs and activities',
        'Completed advanced coursework in mathematics and sciences',
        'Active in community service and leadership programs'
      ],
      achievements: [
        'Dean\'s List recognition',
        'Academic excellence awards',
        'Leadership positions in student organizations'
      ]
    },
    {
      id: 'basis',
      name: 'BASIS Independent Manhattan',
      location: 'New York, NY',
      period: '2019 - 2022',
      degree: 'Middle School',
      logo: '/basislogo.webp',
      description: 'A rigorous college preparatory school focused on STEM education and critical thinking.',
      details: [
        'Completed middle school with distinction',
        'Participated in advanced mathematics programs',
        'Engaged in science and technology projects',
        'Developed strong foundation in core subjects',
        'Involved in extracurricular activities and clubs'
      ],
      achievements: [
        'Academic merit recognition',
        'Science fair participation',
        'Mathematics competition awards'
      ]
    }
  ]

  const toggleSchool = (schoolId: string) => {
    setExpandedSchool(expandedSchool === schoolId ? null : schoolId)
  }

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
          {/* Left Column - About Me */}
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

          {/* Right Column - Education */}
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Education [under construction]
            </motion.h2>
            
            <div className="space-y-4">
              {schools.map((school, index) => (
                <motion.div
                  key={school.id}
                  className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden cursor-pointer hover:border-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onClick={() => toggleSchool(school.id)}
                >
                  {/* School Header */}
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <img 
                          src={school.logo} 
                          alt={`${school.name} logo`}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.style.display = 'none'
                            const nextElement = target.nextElementSibling as HTMLElement
                            if (nextElement) {
                              nextElement.style.display = 'block'
                            }
                          }}
                        />
                        <GraduationCap size={32} className="text-gray-400 hidden" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {school.name}
                        </h3>
                        <div className="flex items-center text-gray-400 text-xs space-x-3">
                          <div className="flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {school.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {school.period}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        {expandedSchool === school.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">
                      {school.degree}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {school.description}
                    </p>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedSchool === school.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="border-t border-gray-800"
                      >
                        <div className="p-4 space-y-3">
                          {/* Details */}
                          <div>
                            <h4 className="text-white font-semibold mb-2 text-sm">Key Highlights</h4>
                            <ul className="space-y-1">
                              {school.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-300 text-xs flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-white font-semibold mb-2 text-sm">Achievements</h4>
                            <div className="flex flex-wrap gap-1">
                              {school.achievements.map((achievement, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                                >
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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