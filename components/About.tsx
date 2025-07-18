'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react'

// Utility to slugify names for linking
const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 40)

const About = () => {
  const [expandedSchool, setExpandedSchool] = useState<string | null>(null)
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  const schools = [
    {
      id: 'trinity',
      name: 'Trinity School',
      location: 'New York, NY',
      period: '2022 - 2026',
      degree: 'High School Diploma',
      logo: '/trinitylogo.webp',
      description: 'A prestigious independent school in Manhattan known for academic excellence and college preparation.',
      gpa: '3.9',
      extracurriculars: {
        sports: [
          'Water Polo',
          'Wrestling', 
          'Indoor Track and Field',
          'Outdoor Track and Field',
          'Swimming'
        ],
        clubs: [
          'TrinLabs',
          'HackTrin',
          'Book Club',
          'Project Rousseau',
          'Competitive Coding Club',
          'Enigma',
          'Math Team',
          'Upper School Math Tutors',
          'Upper School CS Tutors',
          'Modern Language Tutors',
          'Slavic Affairs Club'
        ]
      },
      leadership: [
        'Water Polo: Captain (1 year)',
        'TrinLabs: Project Manager (1 year), Head of Development (1 year), President (1 year)',
        'HackTrin: VP of Education (1 year), President (1 year)',
        'Book Club: President (1 year)',
        'Project Rousseau: Founder and President (3 years)',
        'Competitive Coding Club: President (1 year)',
        'Enigma: President (2 years)',
        'Upper School Math Tutors: President (2 years)',
        'Upper School CS Tutors: Founder and President (2 years)',
        'Slavic Affairs Club: President (2 years)'
      ],
      projects: [
        {
          icon: '🌐',
          title: 'TrinHub',
          description: 'Created school club management platform (hub.trinlabs.com)',
          link: 'https://hub.trinlabs.com'
        },
        {
          icon: '🏷️',
          title: 'StickerTag',
          description: 'Reengineered community building website (trinitystickertag.com)',
          link: 'https://trinitystickertag.com'
        },
        {
          icon: '📷',
          title: 'Camera View Prediction',
          description: 'Advanced computer vision project for camera view prediction'
        }
      ],
      awards: [
        {
          title: 'Hawley Award',
          period: '2023-2024 School Year',
          description: 'Top 3 academic record'
        },
        {
          title: 'Downtown Mathematics Invitational',
          period: 'December 2024',
          description: '2nd Place Team - A NYC-wide math competition with 50 teams participating'
        },
        {
          title: 'International Informatics Olympiad in Teams (IIOT)',
          period: 'May 2025',
          description: 'Captain of the US team'
        },
        {
          title: 'United States of America Informatics Olympiad in Teams (USIOT)',
          period: 'April 2025',
          description: '4th Place Team'
        },
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
      gpa: '4.2',
      awards: [
        {
          title: 'Honor Roll',
          period: '2019-2022',
          description: 'Recieved 7 times for being one of the top 10% of students in the school'
        },
        {
          title: "90's Award",
          period: '2019-2022',
          description: 'Received 9 times for having an average above 90%'
        },
        {
          title: 'Pre-Calculus Award',
          period: '2022',
          description: 'Recognition for excellence in Pre-Calculus'
        },
        {
          title: 'Physics Award',
          period: '2022',
          description: 'Recognition for excellence in Physics'
        },
        {
          title: 'Chemistry Award',
          period: '2022',
          description: 'Recognition for excellence in Chemistry'
        }
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
              Education
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
                        className="border-t border-gray-800 bg-gray-900/30"
                      >
                        <div className="p-6 space-y-6">
                          {/* GPA */}
                          <div>
                            <h4 className="text-white font-semibold mb-3 text-base flex items-center">
                              <span className="w-1 h-4 bg-primary rounded-full mr-3"></span>
                              Academic Performance
                            </h4>
                            <div className="text-gray-300 text-sm p-2 bg-gray-800/30 rounded-lg">
                              GPA: {school.gpa}
                            </div>
                          </div>

                          {/* Extracurricular Activities */}
                          {school.extracurriculars && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 text-base flex items-center">
                                <span className="w-1 h-4 bg-primary rounded-full mr-3"></span>
                                Extracurricular Activities
                              </h4>
                              <div className="space-y-3">
                                {/* Sports */}
                                {school.extracurriculars.sports.length > 0 && (
                                  <div>
                                    <h5 className="text-gray-300 font-medium mb-2 text-sm">Sports</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {school.extracurriculars.sports.map((activity, idx) => {
                                        const tagSlug = slugify(activity)
                                        // Find leadership items that match this sport
                                        const relatedIds = school.leadership
                                          .map((role, lidx) => ({
                                            slug: slugify(role.split(':')[0]),
                                            id: `lead-${slugify(role.split(':')[0])}-${lidx}`
                                          }))
                                          .filter(r => r.slug === tagSlug)
                                          .map(r => r.id)

                                        return (
                                          <span
                                            key={idx}
                                            onMouseEnter={() => setHoveredSlug(tagSlug)}
                                            onMouseLeave={() => setHoveredSlug(null)}
                                            className={`px-3 py-1 rounded-lg border text-sm transition-colors duration-200 ${hoveredSlug === tagSlug ? 'bg-primary/20 text-primary border-primary/30' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'}`}
                                          >
                                            {activity}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  </div>
                                )}
                                
                                {/* Clubs */}
                                {school.extracurriculars.clubs.length > 0 && (
                                  <div>
                                    <h5 className="text-gray-300 font-medium mb-2 text-sm">Clubs & Organizations</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {school.extracurriculars.clubs.map((activity, idx) => {
                                        const tagSlug = slugify(activity)
                                        const relatedIds = school.leadership
                                          .map((role, lidx) => ({
                                            slug: slugify(role.split(':')[0]),
                                            id: `lead-${slugify(role.split(':')[0])}-${lidx}`
                                          }))
                                          .filter(r => r.slug === tagSlug)
                                          .map(r => r.id)

                                        return (
                                          <span
                                            key={idx}
                                            onMouseEnter={() => setHoveredSlug(tagSlug)}
                                            onMouseLeave={() => setHoveredSlug(null)}
                                            className={`px-3 py-1 rounded-lg border text-sm transition-colors duration-200 ${hoveredSlug === tagSlug ? 'bg-primary/20 text-primary border-primary/30' : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'}`}
                                          >
                                            {activity}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Leadership & Service */}
                          {school.leadership && school.leadership.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 text-base flex items-center">
                                <span className="w-1 h-4 bg-primary rounded-full mr-3"></span>
                                Leadership & Service
                              </h4>
                              <div className="space-y-2">
                                {school.leadership.map((role, idx) => {
                                  const leadershipSlug = slugify(role.split(':')[0])
                                  const leadId = `lead-${leadershipSlug}-${idx}`

                                  return (
                                    <div
                                      key={idx}
                                      onMouseEnter={() => setHoveredSlug(leadershipSlug)}
                                      onMouseLeave={() => setHoveredSlug(null)}
                                      className={`text-sm p-2 rounded-lg transition-colors duration-200 ${hoveredSlug === leadershipSlug ? 'bg-primary/20 text-white' : 'text-gray-300 bg-gray-800/30 hover:bg-gray-800/50'}`}
                                    >
                                      {role}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {/* Notable Projects */}
                          {school.projects && school.projects.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 text-base flex items-center">
                                <span className="w-1 h-4 bg-primary rounded-full mr-3"></span>
                                Notable Projects
                              </h4>
                              <div className="space-y-3">
                                {school.projects.map((project, idx) => (
                                  <div key={idx} className="p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors duration-200">
                                    <div className="text-gray-300 text-sm">
                                      <div className="font-medium text-white mb-1">{project.title}</div>
                                      <div className="text-gray-400 mb-2">{project.description}</div>
                                      {project.link && (
                                        <a 
                                          href={project.link} 
                                          target="_blank" 
                                          rel="noopener noreferrer" 
                                          className="text-primary text-xs hover:text-blue-400 transition-colors duration-200"
                                        >
                                          View Project →
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Awards */}
                          {school.awards && school.awards.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 text-base flex items-center">
                                <span className="w-1 h-4 bg-primary rounded-full mr-3"></span>
                                Awards & Recognition
                              </h4>
                              <div className="space-y-2">
                                {school.awards.map((award, idx) => (
                                  <div key={idx} className="p-3 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors duration-200">
                                    <div className="text-gray-300 text-sm">
                                      <div className="font-medium text-white">{award.title}</div>
                                      <div className="text-gray-400 text-xs">{award.period}</div>
                                      <div className="text-gray-400">{award.description}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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