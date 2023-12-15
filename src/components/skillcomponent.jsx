import React, { useState } from 'react';
import './SkillsComponent.css';

const SkillsComponent = () => {
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(true);

  const technicalSkills = [
    { name: 'React', progress: 80 },
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 85 },
    { name: 'Data Structure', progress: 70 },
    { name: 'JavaScript', progress: 75 },
    { name: 'SQL', progress: 65 },
  ];

  const softSkills = [
    { name: 'Positivity', progress: 95 },
    { name: 'Goal Oriented', progress: 85 },
    { name: 'Creativity', progress: 80 },
    { name: 'Organization', progress: 90 },
    { name: 'Empathy', progress: 75 },
    { name: 'Adaptability', progress: 85 },
    { name: 'Collaboration', progress: 90 },
    { name: 'Problem Solving', progress: 80 },
  ];

  const skillsToShow = showTechnicalSkills ? technicalSkills : softSkills;

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-buttons">
        <button onClick={() => setShowTechnicalSkills(true)}>Technical Skills</button>
        <button onClick={() => setShowTechnicalSkills(false)}>Soft Skills</button>
      </div>
      <div className="skills-grid">
        {skillsToShow.map((skill) => (
          <div key={skill.name} className="skill-item">
            <p>{skill.name}</p>
            <progress value={skill.progress} max="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
