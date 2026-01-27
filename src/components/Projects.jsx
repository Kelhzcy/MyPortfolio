import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'BantayBakir',
      subtitle: 'A QR BASED Tree Tagging G.I.S for D.E.N.R.',
      role: 'Full Stack Developer',
      location: 'Bayombong',
      description: [
        'Developed BantayBakir, a full-stack mobile app for tree monitoring with secure user authentication',
        'Implemented QR code scanning/generation and map-based pin tracking to display tree details and locations',
        'Built offline-first functionality with automatic data synchronization when online.',
      ],
      technologies: ['React', 'Expo', 'Firebase', 'QR Code', 'Maps', 'Mobile'],
      status: 'Completed',
      images: [
        '/592190862_1403955814638646_3201099838912886610_n.jpg',
        '/593413770_1610411016991090_2298796860857651563_n.jpg',
        '/593892419_2377539866016425_6290922020568195591_n.jpg',
        '/595001834_1122911313038802_6656030349567322769_n.jpg',
        '/595033565_1409611610496285_6041170444290588214_n.jpg',
        '/595047394_1850116502379646_1446826708473066652_n.jpg',
      ],
    },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-subtitle">Portfolio of completed projects and work</p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Role:</span>
                <span className="meta-value">{project.role}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Location:</span>
                <span className="meta-value">{project.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Status:</span>
                <span className="meta-value status completed">{project.status}</span>
              </div>
            </div>

            <div className="project-gallery">
              <h3>Project Gallery</h3>
              <div className="gallery-grid">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                    <div className="gallery-overlay">
                      <span className="view-text">View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-description">
              <h3>Key Highlights</h3>
              <ul className="description-list">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-image-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Project screenshot" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
