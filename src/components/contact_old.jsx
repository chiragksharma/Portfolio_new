// src/components/Contact.js
import React from 'react';

function Contact({ contact }) {
  return (
    <div className="contact  p-5 text-white rounded-lg shadow-lg flex items-center border border-gray-700" style={{ backgroundColor: '#1A1A1A' }}>
      <p>{contact.message}</p>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </div>
  );
}

export default Contact;
