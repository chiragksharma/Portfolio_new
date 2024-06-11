import React from 'react';

function Tools({ interests }) {
  return (
    <div className="tools p-5 text-white rounded-lg shadow-lg flex flex-wrap items-center border border-gray-700" style={{ backgroundColor: '#1A1A1A' }}>
      {/* <h2 className="text-2xl font-bold mb-4">Interests</h2> */}
      {/* <div className="grid grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <img key={index} src={tool} alt="tool" className="w-12 h-12" />
        ))}
      </div> */}
      {interests.map((interest, index) => (
        <span key={index} className="bg-black text-white rounded-full px-3 py-1 m-1 text-sm">{interest}</span>
      ))}
    </div>
  );
}

export default Tools;
