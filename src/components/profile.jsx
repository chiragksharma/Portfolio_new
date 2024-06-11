import React from 'react';
import './profile.css'
function Profile({ profile }) {
  return (
    <div className="profile p-5 text-white rounded-lg shadow-lg flex items-center border border-gray-700" style={{ backgroundColor: '#1A1A1A' }}>
      <img src={profile.image} alt={profile.name} className="w-36 h-36 rounded-lg mr-4" />
      <div>
        <h1 className="text-xl font-medium mb-2">Hello 👋🏻 I'm</h1>
        <h2 className="text-xl font-medium mb-2">{profile.name}</h2>
        <h3 className="text-sm font-light mb-4">{profile.title}</h3>
      </div>
    </div>
  );
}

export default Profile;
