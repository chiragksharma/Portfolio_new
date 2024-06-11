import React from 'react';

function Education({ education }) {
  return (
    <div className="education p-5 text-white rounded-lg shadow-lg flex items-center border border-gray-700" style={{ backgroundColor: '#1A1A1A' }}>
      {education.map((edu, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-lg font-bold">{edu.degree}</h3>
          <span className="block text-sm text-gray-500">{edu.institution} - {edu.year}</span>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
