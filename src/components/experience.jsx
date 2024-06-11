// src/components/Experience.js
import React from 'react';

function Experience({ experience }) {
  return (
    <div className="experience p-5 text-white rounded-lg shadow-lg flex flex-col items-start border border-gray-700" style={{ backgroundColor: '#1A1A1A' }}>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{job.position} at {job.company}</h3>
          <span className="text-sm text-gray-400">{job.duration}</span>
          <ul className="list-disc list-inside mt-2">
            {job.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
