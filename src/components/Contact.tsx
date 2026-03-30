'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mvgrelln', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-gap">
      <div className="site-column">
        <h2 className="site-section-title">Contact</h2>

        <p className="mt-10 text-foreground">
          I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="mt-14 space-y-6 border-t border-foreground/20 pt-14">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-[0.12em] text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full border border-foreground bg-background px-3 py-2 text-foreground placeholder:text-muted"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-[0.12em] text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-foreground bg-background px-3 py-2 text-foreground placeholder:text-muted"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-[0.12em] text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full resize-none border border-foreground bg-background px-3 py-2 text-foreground placeholder:text-muted"
              placeholder="Your message..."
            />
          </div>

          {submitStatus === 'success' && (
            <p className="text-foreground" role="status">
              Message sent successfully.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-foreground" role="alert">
              Failed to send message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-foreground bg-background px-4 py-2 text-foreground disabled:opacity-50"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
