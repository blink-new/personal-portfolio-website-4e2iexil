import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Play,
  Eye,
  Heart,
  Download,
  ExternalLink,
  User,
  Code,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Home,
  Video,
  Camera,
  Headphones,
  Zap
} from 'lucide-react'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Create cursor trail
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.left = e.clientX + 'px'
      trail.style.top = e.clientY + 'px'
      document.body.appendChild(trail)
      
      setTimeout(() => {
        document.body.removeChild(trail)
      }, 500)
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919328278062', '_blank')
  }

  return (
    <div className="ios-background">
      {/* iOS 18 Liquid Header */}
      <header className="ios-liquid-header">
        <div className="liquid-container">
          <motion.div 
            className="liquid-brand"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Video className="w-6 h-6 text-blue-600" />
            <span className="liquid-brand-text">Jay Kumar</span>
          </motion.div>
          
          <motion.div 
            className="liquid-nav-pill"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div 
              className={`liquid-nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <Home className="liquid-nav-icon" />
              <span className="liquid-nav-text">Home</span>
            </div>
            
            <div 
              className={`liquid-nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <User className="liquid-nav-icon" />
              <span className="liquid-nav-text">About</span>
            </div>
            
            <div 
              className={`liquid-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <Code className="liquid-nav-icon" />
              <span className="liquid-nav-text">Skills</span>
            </div>
            
            <div 
              className={`liquid-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              <Camera className="liquid-nav-icon" />
              <span className="liquid-nav-text">Projects</span>
            </div>
            
            <div 
              className={`liquid-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              <Briefcase className="liquid-nav-icon" />
              <span className="liquid-nav-text">Experience</span>
            </div>
            
            <div 
              className={`liquid-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <MessageCircle className="liquid-nav-icon" />
              <span className="liquid-nav-text">Contact</span>
            </div>
          </motion.div>
          
          <motion.div
            className="liquid-action-pill"
            onClick={handleWhatsAppClick}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="liquid-action-icon" />
            <span className="liquid-action-text">Contact Me</span>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="ios-section min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text floating-animation">Jay Kumar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">
                Professional Video Editor
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Creating stunning visual stories through expert video editing, with experience at Girganga Parivar Trust. 
                Specializing in Adobe Premiere Pro, After Effects, and creative storytelling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="ios-button pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  Send Message
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="ios-button ios-button-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="hero-profile-container">
                <div className="hero-profile-ring">
                  <img
                    src="/jayesh-profile.jpg"
                    alt="Jay Kumar"
                    className="hero-profile-image"
                  />
                </div>
                <div className="hero-badge">
                  🎬
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="ios-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate video editor from Rajkot, Gujarat, with expertise in creating compelling visual narratives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="ios-card p-8 text-center"
            >
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
              <div className="space-y-2 text-gray-600">
                <p><MapPin className="inline w-4 h-4 mr-2" />Rajkot, Gujarat</p>
                <p><Phone className="inline w-4 h-4 mr-2" />+91 93282 78062</p>
                <p><Mail className="inline w-4 h-4 mr-2" />jay.editor@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="ios-card p-8 text-center"
            >
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-2 text-gray-600">
                <p>Gujarati (Native)</p>
                <p>Hindi (Fluent)</p>
                <p>English (Professional)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="ios-card p-8 text-center"
            >
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
              <div className="space-y-2 text-gray-600">
                <p>🎮 Gaming</p>
                <p>✂️ Video Editing</p>
                <p>✈️ Travelling</p>
                <p>📚 Learning</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="ios-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">
              Expertise in professional video editing and post-production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Adobe Premiere Pro', level: 90, icon: '🎬' },
              { name: 'After Effects', level: 75, icon: '✨' },
              { name: 'Photography', level: 95, icon: '📸' },
              { name: 'Videography', level: 95, icon: '🎥' },
              { name: 'Color Grading', level: 80, icon: '🎨' },
              { name: 'Motion Graphics', level: 70, icon: '🎭' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ios-card p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="ios-progress-container mb-2">
                  <motion.div
                    className="ios-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-right text-sm text-gray-600 font-semibold">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="ios-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Showcase of my best video editing work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NGO Documentary',
                description: 'Promotional video for Girganga Parivar Trust showcasing community work',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
                views: '15.2K',
                likes: '892',
                tech: ['Premiere Pro', 'After Effects', 'Color Grading']
              },
              {
                title: 'Event Highlights',
                description: 'Dynamic event coverage with cinematic storytelling',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
                views: '8.7K',
                likes: '456',
                tech: ['Premiere Pro', 'Motion Graphics', 'Audio Sync']
              },
              {
                title: 'Corporate Promo',
                description: 'Professional corporate video with modern aesthetics',
                image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop',
                views: '12.1K',
                likes: '678',
                tech: ['After Effects', 'Typography', 'Brand Integration']
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ios-card overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {project.views}
                    </span>
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {project.likes}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 ios-button text-sm py-2">
                      <Play className="w-4 h-4" />
                      Watch
                    </button>
                    <button className="px-4 py-2 ios-card border-0 rounded-lg">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="ios-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Experience & Education</h2>
            <p className="text-xl text-gray-600">
              My professional journey and academic background
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                <div className="ios-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold">Video Editor</h4>
                      <p className="text-blue-600 font-medium">Girganga Parivar Trust</p>
                      <p className="text-gray-500 text-sm mb-2">2023 - Present</p>
                      <p className="text-gray-700">
                        Creating promotional videos, documentaries, and social media content for NGO activities. 
                        Responsible for complete video production pipeline from concept to final delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="ios-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      B
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold">Bachelor of Science</h4>
                      <p className="text-green-600 font-medium">Kotak Institute</p>
                      <p className="text-gray-500 text-sm mb-2">Completed</p>
                      <p className="text-gray-700">
                        Comprehensive undergraduate program providing strong foundation in analytical thinking and problem-solving.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ios-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      H
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold">Higher Secondary Certificate</h4>
                      <p className="text-purple-600 font-medium">Shree Sahajanand Swami Gurukul</p>
                      <p className="text-gray-500 text-sm mb-2">Completed</p>
                      <p className="text-gray-700">
                        Strong academic foundation with focus on science and mathematics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ios-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold">Secondary School Certificate</h4>
                      <p className="text-orange-600 font-medium">Shree Sahajanand Swami Gurukul</p>
                      <p className="text-gray-500 text-sm mb-2">Completed</p>
                      <p className="text-gray-700">
                        Completed secondary education with excellent academic performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="ios-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to bring your video projects to life? Let's collaborate!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="ios-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 93282 78062</p>
                  </div>
                </div>
              </div>

              <div className="ios-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">jay.editor@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="ios-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-600">Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 ios-card flex items-center justify-center text-gray-800 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 ios-card flex items-center justify-center text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 ios-card flex items-center justify-center text-pink-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="ios-card p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="ios-input"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="ios-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="ios-input">
                    <option>Corporate Video</option>
                    <option>Event Coverage</option>
                    <option>Documentary</option>
                    <option>Social Media Content</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="ios-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full ios-button pulse-glow text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Jay Kumar</h3>
            <p className="text-gray-400 mb-6">Professional Video Editor</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500">
              © 2024 Jay Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App