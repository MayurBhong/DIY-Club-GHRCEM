import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Events from './pages/Events';
import Memories from './pages/Memories';
import Contact from './pages/Contact';

import logo from './img/DIY logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-purple-500 to-indigo-600 p-6 rounded-lg shadow-md">
        <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-lg shadow-md text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
              <img 
                  src={logo} 
                  alt="DIY Club Logo" 
                  className="h-10 w-15 mr-2" 
                />
                <Link to="/" className="text-2xl font-bold">DIY Club GHRCEM</Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-emerald-700"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="hover:text-emerald-200 transition-colors">Home</Link>
                <Link to="/events" className="hover:text-emerald-200 transition-colors">Events</Link>
                <Link to="/memories" className="hover:text-emerald-200 transition-colors">Memories</Link>
                <Link to="/contact" className="hover:text-emerald-200 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:bg-emerald-700 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/events" className="block px-3 py-2 hover:bg-emerald-700 rounded-md" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link to="/memories" className="block px-3 py-2 hover:bg-emerald-700 rounded-md" onClick={() => setIsMenuOpen(false)}>Memories</Link>
              <Link to="/contact" className="block px-3 py-2 hover:bg-emerald-700 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;