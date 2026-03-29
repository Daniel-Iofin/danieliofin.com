'use client'

interface Project {
  title: string
  description: string
  live: string | null
  github: string | null
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Club Management Platform',
      description:
        "Developed my high school's first club management platform. An all-in-one solution for 150+ clubs, sends 10,000+ emails per month, and handles 100,000+ API requests per month.",
      live: 'https://hub.trinlabs.club',
      github: null,
    },
    {
      title: 'Sticker Tag',
      description:
        'Reengineered an existing community building site to be maintainable and scalable.',
      live: 'https://www.trinitystickertag.com',
      github: null,
    },
  ]

  return (
    <section id="projects" className="section-gap">
      <div className="site-column">
        <h2 className="site-section-title">Projects</h2>
        <ul className="mt-10 list-disc pl-5 text-foreground marker:text-foreground">
          {projects.map((project) => {
            const href = project.live ?? project.github
            return (
              <li key={project.title} className="mt-6 first:mt-0">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link font-mono text-[0.95em] font-normal"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="font-mono text-[0.95em]">{project.title}</span>
                )}
                <span className="text-foreground"> – {project.description}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
