'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/danieliofin',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/danieliofin',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/danieliofin',
      icon: Twitter
    },
    {
      name: 'Email',
      url: 'mailto:daniel@danieliofin.com',
      icon: Mail
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-900/20">
      <div className="container-max">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Let's Connect
            </h3>
            
            <p className="text-gray-300 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <link.icon size={20} className="mr-3" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 