import React from 'react';

function Projects({ projects }) {
  const renderIcon = (icon) => {
    if (typeof icon === 'string' && icon.startsWith('/')) {
      return <img src={process.env.PUBLIC_URL + icon} alt="Project icon" className="h-12 w-12 mb-3" />;
    }

    // If you have additional local icons, you can add them here similarly.
    const IconComponent = {
      EaseAI: <img src={process.env.PUBLIC_URL + '/ease_ai_300x300_logo.png'} alt="Ease AI Logo" className="h-12 w-12 mb-3" />
    }[icon];

    return IconComponent || null;
  };

  return (
    <div className="projects p-5 text-white rounded-lg shadow-lg flex flex-wrap items-center border border-gray-700" style={{ backgroundColor: '#1A1A1A' }}>
      {projects.map((project, index) => (
        <a 
          key={index} 
          href={project.link} 
          className="project-card text-white rounded-lg p-4 m-2 shadow-md flex flex-col items-center" 
          style={{ width: '200px', backgroundColor: "#0F0F0F" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon mb-3">{renderIcon(project.icon)}</div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </a>
      ))}
    </div>
  );
}

export default Projects;
