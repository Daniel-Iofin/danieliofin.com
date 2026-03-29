'use client'

import { useState } from 'react'

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
      gpa: '3.9',
      extracurriculars: {
        sports: [
          'Water Polo',
          'Wrestling',
          'Indoor Track and Field',
          'Outdoor Track and Field',
          'Swimming',
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
          'Slavic Affairs Club',
        ],
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
        'Slavic Affairs Club: President (2 years)',
      ],
      projects: [
        {
          icon: '🌐',
          title: 'TrinHub',
          description: 'Created school club management platform (hub.trinlabs.club)',
          link: 'https://hub.trinlabs.club',
        },
        {
          icon: '🏷️',
          title: 'StickerTag',
          description: 'Reengineered community building website (trinitystickertag.com)',
          link: 'https://trinitystickertag.com',
        },
        {
          icon: '📷',
          title: 'Camera View Prediction',
          description: 'Advanced computer vision project for camera view prediction',
        },
      ],
      awards: [
        {
          title: 'Hawley Award',
          period: '2023-2024 School Year',
          description: 'Top 3 academic record',
        },
        {
          title: 'Downtown Mathematics Invitational',
          period: 'December 2024',
          description: '2nd Place Team - A NYC-wide math competition with 50 teams participating',
        },
        {
          title: 'International Informatics Olympiad in Teams (IIOT)',
          period: 'May 2025',
          description: 'Captain of the US team',
        },
        {
          title: 'United States of America Informatics Olympiad in Teams (USIOT)',
          period: 'April 2025',
          description: '4th Place Team',
        },
        {
          title: 'Alumni Award (Water Polo)',
          period: 'November 2025',
          description:
            'For leadership, commitment, and outstanding contribution to the water polo team throughout high school.',
        },
      ],
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
          description: 'Recieved 7 times for being one of the top 10% of students in the school',
        },
        {
          title: "90's Award",
          period: '2019-2022',
          description: 'Received 9 times for having an average above 90%',
        },
        {
          title: 'Pre-Calculus Award',
          period: '2022',
          description: 'Recognition for excellence in Pre-Calculus',
        },
        {
          title: 'Physics Award',
          period: '2022',
          description: 'Recognition for excellence in Physics',
        },
        {
          title: 'Chemistry Award',
          period: '2022',
          description: 'Recognition for excellence in Chemistry',
        },
      ],
    },
  ]

  const toggleSchool = (schoolId: string) => {
    setExpandedSchool(expandedSchool === schoolId ? null : schoolId)
  }

  return (
    <section id="about" className="section-gap">
      <div className="site-column space-y-28">
        <div>
          <h2 className="site-section-title">About</h2>
          <div className="mt-10 space-y-6 text-foreground">
            <p>
              I'm a software engineer with a passion for creating innovative solutions that make a difference. With
              expertise in full-stack development, I specialize in building scalable web applications and mobile
              experiences.
            </p>
            <p>
              My journey into tech started with an ML class during covid lockdowns, and has since evolved into a six
              year career focused on solving real-world problems.
            </p>
            <p>When I'm not coding, you can find me reading, swimming, playing water polo or hanging out with friends :)</p>
          </div>
        </div>

        <div>
          <h2 className="site-section-title">Education</h2>
          <div className="mt-10 space-y-6">
            {schools.map((school) => (
              <div key={school.id} data-school-id={school.id} className="border border-foreground">
                <button
                  type="button"
                  onClick={() => toggleSchool(school.id)}
                  className="flex w-full items-start gap-4 p-4 text-left text-foreground"
                >
                  <div className="h-12 w-12 shrink-0 border border-foreground/30 p-1">
                    <img
                      src={school.logo}
                      alt={`${school.name} logo`}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-normal text-foreground">{school.name}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {school.location} · {school.period}
                    </p>
                    <p className="mt-2 text-sm text-foreground">{school.degree}</p>
                    <p className="mt-2 text-sm text-muted">{school.description}</p>
                  </div>
                  <span className="shrink-0 text-muted" aria-hidden>
                    {expandedSchool === school.id ? '−' : '+'}
                  </span>
                </button>

                {expandedSchool === school.id && (
                  <div className="border-t border-foreground p-6 space-y-8 text-sm text-foreground">
                    <div>
                      <h4 className="site-section-title">Academic performance</h4>
                      <p className="mt-4">GPA: {school.gpa}</p>
                    </div>

                    {school.extracurriculars && (
                      <div>
                        <h4 className="site-section-title">Extracurricular activities</h4>
                        {school.extracurriculars.sports.length > 0 && (
                          <div className="mt-4">
                            <p className="text-muted">Sports</p>
                            <ul className="mt-2 list-disc pl-5">
                              {school.extracurriculars.sports.map((activity, idx) => (
                                <li key={idx}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {school.extracurriculars.clubs.length > 0 && (
                          <div className="mt-6">
                            <p className="text-muted">Clubs & organizations</p>
                            <ul className="mt-2 list-disc pl-5">
                              {school.extracurriculars.clubs.map((activity, idx) => (
                                <li key={idx}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {school.leadership && school.leadership.length > 0 && (
                      <div>
                        <h4 className="site-section-title">Leadership & service</h4>
                        <ul className="mt-4 list-disc pl-5 space-y-2">
                          {school.leadership.map((role, idx) => (
                            <li key={idx}>{role}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {school.projects && school.projects.length > 0 && (
                      <div>
                        <h4 className="site-section-title">Notable projects</h4>
                        <ul className="mt-4 list-disc pl-5 space-y-4">
                          {school.projects.map((project, idx) => (
                            <li key={idx}>
                              <span className="font-mono text-[0.95em]">
                                {project.icon} {project.title}
                              </span>
                              <span> – {project.description}</span>
                              {project.link && (
                                <>
                                  {' '}
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="site-link break-all"
                                  >
                                    {project.link.replace(/^https?:\/\//, '')}
                                  </a>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {school.awards && school.awards.length > 0 && (
                      <div>
                        <h4 className="site-section-title">Awards & recognition</h4>
                        <ul className="mt-4 list-disc pl-5 space-y-4">
                          {school.awards.map((award, idx) => (
                            <li key={idx}>
                              <span className="text-foreground">{award.title}</span>
                              <span className="text-muted"> ({award.period})</span>
                              <span> – {award.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
