import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-gray-600">gagan.tawari.cs@ghrcem.raisoni.net</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-gray-600">80800 71083</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MapPin className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Location</h3>
          <p className="text-gray-600">GHREMP E305 E building</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Registration Form: Mega Fest 2k25</h2>
        <p className="text-gray-600 mb-6">
          Click below to access the registration form
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyK3tMUJHInakEiV-u6p0uIlxeA4HIADUf6kZON6wLDzImOA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-5 rounded-lg transition-colors duration-300 inline-block"
        >
          Go to Registration Form
        </a>
      </div>
    </div>
  );
}

export default Contact;