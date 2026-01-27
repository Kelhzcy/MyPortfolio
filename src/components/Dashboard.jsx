import { useState, useEffect } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FolderIcon from '@mui/icons-material/Folder';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import './Dashboard.css';

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [showClientModal, setShowClientModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Arnoell Kelhzcy Galano';

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Typing animation effect - restarts when activeMenu changes to 'dashboard'
  useEffect(() => {
    if (activeMenu !== 'dashboard') {
      return;
    }
    
    setDisplayedText(''); // Reset text when entering dashboard
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Slower typing animation (150ms per character)
    return () => clearInterval(typingInterval);
  }, [activeMenu]);

  const stats = [
    { label: 'Projects', value: '1', icon: FolderIcon, color: '#1a1a1a' },
    { label: 'Skills', value: '15+', icon: EmojiEventsIcon, color: '#333333' },
    { label: 'Clients', value: '1', icon: GroupIcon, color: '#666666', clickable: true },
  ];

  const menuItems = [
    { id: 'dashboard', icon: FolderIcon, label: 'Home' },
    { id: 'projects', icon: FolderIcon, label: 'Projects' },
    { id: 'skills', icon: SchoolIcon, label: 'Skills' },
    { id: 'contact', icon: EmailIcon, label: 'Contact' },
  ];

  const handleViewCV = () => {
    setShowCVModal(true);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Arnoell_Kelhzcy_Galano.pdf';
    link.download = 'Arnoell_Kelhzcy_Galano.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCVModal(false);
  };

  return (
    <div className="dashboard-container">
      {/* Fixed Header Navigation */}
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            <img src="/Mypfp.png" alt="Profile" className="logo-image" />
            <span className="logo-text">Arnoell Galano</span>
          </div>
          
          <nav className="header-nav">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  className={`header-nav-item ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => setActiveMenu(item.id)}
                >
                  <span className="nav-label">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <button className="header-cv-btn" onClick={handleViewCV}>
            <FileDownloadIcon className="download-icon" />
            Download CV
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-wrapper">
        {activeMenu === 'contact' ? (
          <Contact />
        ) : activeMenu === 'skills' ? (
          <Skills />
        ) : activeMenu === 'projects' ? (
          <Projects />
        ) : (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <div className="hero-text">
                  <p className="hero-greeting">Welcome to my Portfolio</p>
                  <h1 className="hero-title">
                    Hi, I'm <span className="highlight typing-text">{displayedText}</span>
                    {displayedText.length < fullName.length && <span className="typing-cursor">|</span>}
                  </h1>
                  <p className="hero-subtitle">Full Stack Developer</p>
                  <p className="hero-description">
                    BS Information Technology graduate from Saint Mary's University, specializing in building 
                    practical, user-centered applications with clean design and reliable architecture.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => setActiveMenu('projects')}>
                      View Projects
                    </button>
                    <button className="btn-secondary" onClick={() => setActiveMenu('contact')}>
                      Get in Touch
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <div className="image-wrapper">
                    <img src="/Mypfp.png" alt="Arnoell Kelhzcy Galano" />
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
              <div className="stats-grid-home">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`stat-card-home ${stat.clickable ? 'clickable' : ''}`}
                    onClick={() => stat.clickable && setShowClientModal(true)}
                  >
                    <div className="stat-icon-home">
                      <stat.icon />
                    </div>
                    <h3 className="stat-value-home">{stat.value}</h3>
                    <p className="stat-label-home">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* About Section */}
            <section className="about-section">
              <h2 className="section-title">About Me</h2>
              <div className="about-content-home">
                <div className="about-intro">
                  <h3 className="about-name">Arnoell Kelhzcy A. Galano</h3>
                  <p className="about-tagline">BS Information Technology | Full Stack Developer</p>
                  <p className="about-description">
                    I specialize in Full Stack Web and Mobile Development, building practical, user-focused applications with clean design and reliable system architecture.
                  </p>
                </div>

                <div className="about-highlight-box">
                  <div className="highlight-header">
                    <SchoolIcon className="highlight-icon" />
                    <h4 className="highlight-title">Featured Project: BantayBakir</h4>
                  </div>
                  <p className="highlight-text">
                    QR-based Tree Tagging and GIS system for DENR Bayombong. I handled both frontend and backend development, including authentication, QR code integration, map-based tracking, and offline-first data synchronization.
                  </p>
                </div>

                <div className="about-grid">
                  <div className="about-item">
                    <div className="about-item-header">
                      <CodeIcon className="about-item-icon" />
                      <h4 className="about-item-title">Tech Stack</h4>
                    </div>
                    <ul className="about-list">
                      <li>React (Vite) & JavaScript</li>
                      <li>Firebase & MongoDB</li>
                      <li>Expo Mobile Development</li>
                      <li>Express Backend</li>
                    </ul>
                  </div>

                  <div className="about-item">
                    <div className="about-item-header">
                      <BuildIcon className="about-item-icon" />
                      <h4 className="about-item-title">Expertise</h4>
                    </div>
                    <ul className="about-list">
                      <li>QR Code Integration</li>
                      <li>Map-Based Systems</li>
                      <li>Git/GitHub Version Control</li>
                      <li>UI/UX Design Focus</li>
                    </ul>
                  </div>
                </div>

                <div className="about-footer">
                  <AutoAwesomeIcon className="footer-icon" />
                  <p>
                    Driven to <strong>continuously learn</strong> and contribute to <strong>impactful, real-world projects</strong>.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Client Modal */}
      {showClientModal && (
        <div className="modal-overlay" onClick={() => setShowClientModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowClientModal(false)}>&times;</button>
            <div className="client-info">
              <h2>Client</h2>
              <p className="client-name">Department of Environment and Natural Resources (DENR)</p>
              <p className="client-location">Bayombong</p>
              <p className="client-date">2025 - 2026</p>
            </div>
          </div>
        </div>
      )}

      {/* CV Preview Modal */}
      {showCVModal && (
        <div className="modal-overlay" onClick={() => setShowCVModal(false)}>
          <div className="modal-content cv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCVModal(false)}>&times;</button>
            <div className="cv-preview">
              <h2 className="cv-title">My CV</h2>
              <p className="cv-description">Preview my CV before downloading</p>
              <div className="cv-preview-container">
                <iframe 
                  src="/Arnoell_Kelhzcy_Galano.pdf" 
                  type="application/pdf"
                  width="100%"
                  height="500px"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}
                />
              </div>
              <div className="cv-button-group">
                <button className="btn-primary" onClick={handleDownloadCV}>
                  <FileDownloadIcon style={{ marginRight: '0.5rem' }} />
                  Download CV
                </button>
                <button className="btn-secondary" onClick={() => setShowCVModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
