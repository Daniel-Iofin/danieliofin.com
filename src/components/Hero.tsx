'use client'

const Hero = () => {
  return (
    <header className="section-gap">
      <div className="site-column">
        <h1 className="site-h1">Daniel Iofin</h1>
        <p className="mt-8 max-w-none text-foreground">
          Software engineer, tutor, and athlete based out of New York City
        </p>
        <p className="mt-10 text-foreground">
          <a
            href="https://github.com/Daniel-Iofin"
            target="_blank"
            rel="noopener noreferrer"
            className="site-link"
          >
            GitHub
          </a>{' '}
          <a
            href="https://linkedin.com/in/daniel-iofin"
            target="_blank"
            rel="noopener noreferrer"
            className="site-link"
          >
            LinkedIn
          </a>{' '}
          <a href="mailto:daniel@danieliofin.com" className="site-link">
            Email
          </a>
        </p>
      </div>
    </header>
  )
}

export default Hero
