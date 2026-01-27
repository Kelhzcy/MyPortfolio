import {
  Code2,
  Database,
  Wrench,
  Languages,
  Heart,
  Zap,
  Coffee,
  FileCode,
  Palette,
  Smartphone,
  Server,
  Layers,
  Github,
  Edit3,
  Music,
} from 'lucide-react';
import './Skills.css';

function Skills() {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'React + Vite', level: 'Proficient', icon: Zap },
        { name: 'Java', level: 'Basic', icon: Coffee },
        { name: 'HTML5', level: 'Proficient', icon: Code2 },
        { name: 'CSS3', level: 'Proficient', icon: Palette },
        { name: 'JavaScript', level: 'Proficient', icon: FileCode },
        { name: 'Expo', level: 'Proficient', icon: Smartphone },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', level: 'Basic', icon: Database },
        { name: 'Firebase', level: 'Proficient', icon: Server },
        { name: 'MongoDB', level: 'Basic', icon: Layers },
      ],
    },
    {
      category: 'Tools & Software',
      items: [
        { name: 'Microsoft Word', level: 'Proficient', icon: FileCode },
        { name: 'Microsoft Excel', level: 'Proficient', icon: Layers },
        { name: 'Microsoft PowerPoint', level: 'Proficient', icon: Palette },
        { name: 'Git/Github', level: 'Basic', icon: Github },
        { name: 'Visual Studio Code', level: 'Proficient', icon: Code2 },
        { name: 'Figma', level: 'Basic', icon: Edit3 },
      ],
    },
  ];

  const languages = [
    { name: 'Filipino', icon: Languages },
    { name: 'English', icon: Languages },
  ];

  const interests = [
    { name: 'Music', icon: Music },
    { name: 'UI/UX Design', icon: Edit3 },
  ];

  const getLevelPercentage = (level) => {
    return level === 'Proficient' ? 85 : 60;
  };

  return (
    <div className="skills-container">
      <header className="skills-header">
        <h1>Skills & Interests</h1>
        <p>Here's what I'm skilled at and passionate about</p>
      </header>

      <div className="skills-content">
        {/* Technical Skills */}
        <section className="skills-section">
          <h2 className="section-title">
            <Code2 className="section-icon-lucide" /> Technical Skills
          </h2>

          {technicalSkills.map((skillCategory, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-name">{skillCategory.category}</h3>
              <div className="skills-grid">
                {skillCategory.items.map((skill, index) => {
                  const SkillIcon = skill.icon;
                  const levelPercentage = getLevelPercentage(skill.level);
                  return (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon-wrapper">
                          <SkillIcon className="skill-icon" />
                        </div>
                        <div className="skill-name-wrapper">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-level">{skill.level}</span>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${levelPercentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Languages & Interests */}
        <section className="skills-section">
          <div className="language-interest-grid">
            {/* Languages */}
            <div className="language-subsection">
              <h2 className="section-title">
                <Languages className="section-icon-lucide" /> Languages
              </h2>
              <div className="language-list">
                {languages.map((lang, index) => {
                  const LangIcon = lang.icon;
                  return (
                    <div key={index} className="language-item">
                      <div className="lang-icon-wrapper">
                        <LangIcon className="lang-icon" />
                      </div>
                      <span className="lang-name">{lang.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interests */}
            <div className="interest-subsection">
              <h2 className="section-title">
                <Heart className="section-icon-lucide" /> Interests
              </h2>
              <div className="interest-list">
                {interests.map((interest, index) => {
                  const InterestIcon = interest.icon;
                  return (
                    <div key={index} className="interest-item">
                      <div className="interest-icon-wrapper">
                        <InterestIcon className="interest-icon" />
                      </div>
                      <span className="interest-name">{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Legend */}
      <div className="skills-legend">
        <div className="legend-item">
          <div
            className="legend-color"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
          ></div>
          <span>Proficient (85%)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#475569' }}></div>
          <span>Basic (60%)</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
