import React, { useEffect, useState } from 'react';
import { Camera, User, Code, Briefcase, Home, Phone, Mail, MapPin, Calendar, GraduationCap, Award, ExternalLink, Send } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorTrails, setCursorTrails] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    let trailId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { id: trailId++, x: e.clientX, y: e.clientY };
      setCursorTrails(prev => [...prev.slice(-5), newTrail]);
      
      setTimeout(() => {
        setCursorTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919328278062', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Cursor Trails */}
      {cursorTrails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
          }}
        />
      ))}

      {/* iOS 18 Liquid Header */}
      <header className="liquid-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <div className="brand-pill">
            <Camera className="w-5 h-5 inline mr-2" />
            Jay Kumar
          </div>

          {/* Navigation Pills */}
          <nav className="hidden md:flex items-center gap-4">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'about', icon: User, label: 'About' },
              { id: 'skills', icon: Code, label: 'Skills' },
              { id: 'projects', icon: Camera, label: 'Projects' },
              { id: 'experience', icon: Briefcase, label: 'Experience' },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-pill ${activeSection === id ? 'active' : ''}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button onClick={openWhatsApp} className="contact-pill">
            Contact Me
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="ios-card floating">
            {/* Profile Image with iOS 18 Ring */}
            <div className="profile-container mb-8">
              <div className="profile-ring"></div>
              <img 
                src="/jay-profile.jpg" 
                alt="Jay Kumar" 
                className="profile-image"
              />
            </div>

            <div className="ios-badge mb-6">
              🎬 Video Editor
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold ios-text-primary mb-6">
              Jay Kumar
            </h1>
            
            <p className="text-xl md:text-2xl ios-text-secondary mb-8 max-w-2xl mx-auto">
              Professional Video Editor crafting cinematic stories that captivate audiences and bring visions to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openWhatsApp} className="ios-button-primary">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
              <button onClick={() => scrollToSection('projects')} className="ios-button">
                <Camera className="w-5 h-5 mr-2" />
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ios-card">
            <h2 className="text-4xl font-bold ios-text-primary mb-8 text-center">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="ios-glass-subtle rounded-2xl p-6">
                <h3 className="text-2xl font-semibold ios-text-primary mb-4">Personal Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="ios-text-secondary">+91 93282 78062</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="ios-text-secondary">jay.editor@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="ios-text-secondary">Rajkot, Gujarat, India</span>
                  </div>
                </div>
              </div>

              <div className="ios-glass-subtle rounded-2xl p-6">
                <h3 className="text-2xl font-semibold ios-text-primary mb-4">Languages & Interests</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold ios-text-secondary mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Gujarati', 'Hindi', 'English'].map(lang => (
                        <span key={lang} className="ios-badge">{lang}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold ios-text-secondary mb-2">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Gaming', 'Video Editing', 'Travelling', 'Learning'].map(hobby => (
                        <span key={hobby} className="ios-badge">{hobby}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ios-card">
            <h2 className="text-4xl font-bold ios-text-primary mb-12 text-center">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: 'Adobe Premiere Pro', level: 90, category: 'Video Editing' },
                { name: 'After Effects', level: 75, category: 'Motion Graphics' },
                { name: 'Photography', level: 95, category: 'Visual Arts' },
                { name: 'Videography', level: 95, category: 'Production' },
                { name: 'Color Grading', level: 80, category: 'Post Production' },
                { name: 'Audio Editing', level: 70, category: 'Sound Design' },
              ].map((skill, index) => (
                <div key={index} className="ios-glass-subtle rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-semibold ios-text-primary">{skill.name}</h3>
                      <p className="text-sm ios-text-muted">{skill.category}</p>
                    </div>
                    <span className="ios-badge">{skill.level}%</span>
                  </div>
                  <div className="ios-progress-container">
                    <div 
                      className="ios-progress-bar" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ios-card">
            <h2 className="text-4xl font-bold ios-text-primary mb-12 text-center">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Corporate Documentary',
                  description: 'Professional documentary for Girganga Parivar Trust showcasing community impact',
                  tech: ['Premiere Pro', 'After Effects', 'Color Grading'],
                  views: '15K',
                  likes: '1.2K'
                },
                {
                  title: 'Wedding Highlights',
                  description: 'Cinematic wedding video with emotional storytelling and beautiful transitions',
                  tech: ['Videography', 'Audio Sync', 'Motion Graphics'],
                  views: '8.5K',
                  likes: '890'
                },
                {
                  title: 'Product Commercial',
                  description: 'High-end product showcase with dynamic camera movements and lighting',
                  tech: ['Photography', 'Video Editing', 'Visual Effects'],
                  views: '12K',
                  likes: '1.5K'
                },
              ].map((project, index) => (
                <div key={index} className="ios-glass-subtle rounded-2xl p-6 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <Camera className="w-12 h-12 ios-text-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold ios-text-primary mb-2">{project.title}</h3>
                  <p className="ios-text-secondary mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="ios-badge text-xs">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm ios-text-muted">
                      <span>👁 {project.views}</span>
                      <span>❤️ {project.likes}</span>
                    </div>
                    <button className="ios-button text-sm py-2 px-4">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ios-card">
            <h2 className="text-4xl font-bold ios-text-primary mb-12 text-center">Experience & Education</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experience */}
              <div className="ios-glass-subtle rounded-2xl p-6">
                <h3 className="text-2xl font-semibold ios-text-primary mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6" />
                  Experience
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="ios-badge mb-2">2023 - Present</div>
                    <h4 className="font-semibold ios-text-primary">Video Editor</h4>
                    <p className="ios-text-secondary text-sm mb-2">Girganga Parivar Trust</p>
                    <p className="ios-text-muted text-sm">
                      Creating compelling video content for NGO initiatives, documentaries, and social media campaigns
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="ios-glass-subtle rounded-2xl p-6">
                <h3 className="text-2xl font-semibold ios-text-primary mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-purple-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                    <div className="ios-badge mb-2">2020 - 2023</div>
                    <h4 className="font-semibold ios-text-primary">Bachelor of Science</h4>
                    <p className="ios-text-secondary text-sm mb-2">Kotak Institute</p>
                  </div>
                  
                  <div className="border-l-2 border-purple-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                    <div className="ios-badge mb-2">2018 - 2020</div>
                    <h4 className="font-semibold ios-text-primary">Higher Secondary Certificate</h4>
                    <p className="ios-text-secondary text-sm mb-2">Shree Sahajanand Swami Gurukul</p>
                  </div>
                  
                  <div className="border-l-2 border-purple-400/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                    <div className="ios-badge mb-2">2016 - 2018</div>
                    <h4 className="font-semibold ios-text-primary">Secondary School Certificate</h4>
                    <p className="ios-text-secondary text-sm mb-2">Shree Sahajanand Swami Gurukul</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="ios-card">
            <h2 className="text-4xl font-bold ios-text-primary mb-12 text-center">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="ios-glass-subtle rounded-2xl p-6">
                <h3 className="text-2xl font-semibold ios-text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold ios-text-primary">Phone</p>
                      <p className="ios-text-secondary">+91 93282 78062</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold ios-text-primary">Email</p>
                      <p className="ios-text-secondary">jay.editor@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold ios-text-primary">Location</p>
                      <p className="ios-text-secondary">Rajkot, Gujarat, India</p>
                    </div>
                  </div>
                </div>
                
                <button onClick={openWhatsApp} className="ios-button-primary w-full mt-6">
                  <Send className="w-5 h-5 mr-2" />
                  Send WhatsApp Message
                </button>
              </div>

              <div className="ios-glass-subtle rounded-2xl p-6">
                <h3 className="text-2xl font-semibold ios-text-primary mb-6">Send Message</h3>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ios-input w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="ios-input w-full"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="ios-input w-full resize-none"
                  />
                  <button type="submit" className="ios-button-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ios-glass-subtle py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="ios-text-muted">
            © 2024 Jay Kumar. Professional Video Editor crafting cinematic experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;