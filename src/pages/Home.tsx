import React from 'react';
import { Palette, Scissors, Heart, Instagram, Linkedin } from 'lucide-react';

function Home() {
  return (
    <div className="bg-gradient-to-br from-[#FDE7BB] via-[#FFF574] via-[#CDC1FF] to-[#CDC1FF] p-6 rounded-lg shadow-md text-center text-black">    <div className="space-y-12 container mx-auto px-4 py-8">
        <section className="text-center pt-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4"><b>Welcome to DIY Club GHRCEM</b></h1><br></br><br></br>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            <b><b>DIY (Do It Yourself) Club</b> is a community where members share knowledge,
            skills, and resources to create and customize projects independently,
            fostering creativity and self-sufficiency. DIY provides a platform to the
            students where they can showcase their talent and creativity.</b>
          </p>
          <br />
          <p><b>Innovate, Collaborate, Elevate</b></p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 rounded-lg shadow-md text-center text-white">
            <div className="flex justify-center mb-4">
              <Palette className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Projects</h3>
            <p className="text-white opacity-90">Explore hundreds of DIY projects for all skill levels</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-400 to-emerald-700 p-6 rounded-lg shadow-md text-center text-white">
            <div className="flex justify-center mb-4">
              <Scissors className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Crafting Tips</h3>
            <p className="text-white opacity-90">Learn essential techniques from experienced crafters</p>
          </div>

          <div className="bg-gradient-to-bl from-rose-500 to-amber-500 p-6 rounded-lg shadow-md text-center text-white">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-white opacity-90">Connect with our DIY community</p>
          </div>
        </section>

        <section className="bg-white bg-opacity-80 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-8">Our Creativity</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* First Image */}
            <div className="w-full md:w-1/3 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="src/img/img1.jpg"
                alt="DIY woodworking project"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">Do</span>
              </div>
            </div>
            
            {/* Second Image */}
            <div className="w-full md:w-1/3 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="src/img/img2.jpg"
                alt="DIY home decoration project"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">It</span>
              </div>
            </div>
            
            {/* Third Image */}
            <div className="w-full md:w-1/3 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="src/img/img3.jpg"
                alt="DIY craft project"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">Yourself</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-md mx-auto text-center backdrop-blur-sm">
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

        {/* About DIY Section */}
        <section className="bg-gradient-to-br from-[#FFB200]/80 via-[#FAC67A]/80 to-[#DD88CF]/80 p-8 rounded-lg shadow-md backdrop-blur-sm">          
          <h2 className="text-3xl font-bold text-center text-black mb-6">About DIY</h2>
          <div className="max-w-4xl mx-auto text-black space-y-6 text-justify leading-relaxed">
            <p className="indent-8">
              <b>In today's fast-paced and ever-evolving world, engineers are at the forefront of
              innovation and progress. However, to truly excel in this field, creativity plays a pivotal role.
              Employers seek engineers who can think outside the box and bring fresh perspectives to
              problem-solving.</b>
            </p>
            <p className="indent-8">
            <b>Recognizing the importance of nurturing creativity among our students, the Do It
              Yourself (DIY) initiative was born. At its core, DIY aims to provide a platform for students
              to unleash their creative potential and develop their personalities. By engaging in hands-on
              activities and artistic endeavors, students not only enhance their technical skills but also
              foster a mindset of innovation and exploration.</b>
            </p>
            <p className="indent-8">
            <b> DIY is more than just an event; it's a journey of self-discovery and growth across three key
              domains of learning: Cognitive, Affective, and Psychomotor. Through a diverse range of
              competitions such as sketching, painting, collage making, model making, origami, face
              painting, Mehendi, nail art, cooking, and more, participants are encouraged to explore their
              interests, experiment with new techniques, and push their boundaries.</b>
            </p>
          </div>
        </section>

        {/* New Event Section */}
        <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-[#065f46] mb-6 text-center">DIY Mega Fest 2k24</h2>
              <div className="w-full relative overflow-hidden rounded-lg aspect-video max-w-4xl">
                <img
                  src="src/img/img10.jpg" 
                  alt="DIY Mega Event 2k24"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center max-w-2xl">
                <p className="text-gray-700 mb-4">
                The DIY Mega Fest 2K24 was an electrifying celebration of creativity and innovation! Participants 
                unleashed their talents across 16+ diverse categories that spanned both technical and creative 
                fields - from robotics and coding to painting, crafts, and beyond. Students showcased their most
                 impressive projects to our enthusiastic college community, demonstrating remarkable skills in both 
                 tech and arts. The festival proved to be the year's most exciting creative showcase, where 
                 makers competed for fantastic prizes while developing valuable new abilities.
                </p>
              </div>
            </div>
          </div>
        </section>

    {/* Social Media Section */}
    <section className="text-center py-6 rounded-lg backdrop-blur-sm bg-gradient-to-r from-[#A08963]/70 via-[#b88772]/70 via-[#e29182]/70 to-[#F38C79]/70">          
      <h2 className="text-2xl font-bold text-[#3C3D37] mb-4">Connect With Us</h2>          
      <div className="flex justify-center space-x-6">
      <a 
        href="https://www.instagram.com/raisoni_diy?igsh=dHhxampxN3pmdmVo" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#261FB3] hover:text-[#1A1480] transition-colors"
      >
        <Instagram className="w-8 h-8" />
       <span className="sr-only">Instagram</span>
      </a>
      <a 
        href="https://www.linkedin.com/in/diyclub/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#261FB3] hover:text-[#1A1480] transition-colors"
      >
      <Linkedin className="w-8 h-8" />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
    </section>

        {/* Footer Section */}
        <footer className="bg-gradient-to-br from-[#3C3D37]/80 to-[#D8D2C2]/80 py-8 px-4 rounded-lg backdrop-blur-sm">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#0A5EB0]">DIY Club GHRCEM</h3>        
        <p className="text-gray-800">
          Fostering creativity and innovation among students through hands-on projects and artistic expression.
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#0A5EB0]">Leadership</h3>
        <ul className="space-y-2">
          <li className="text-gray-800">
            <span className="font-semibold">Gagan Tawari</span> - President DIY Club
          </li>
          <li className="text-gray-800">
            <span className="font-semibold">Mrs. Surabhi Pranav</span> - Counseling Psychologist
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#0A5EB0]">Contact</h3>
        <p className="text-gray-800">
          G.H. Raisoni College of Engineering and Management, Pune
        </p>
        <p className="text-gray-800 mt-2">
          Email: gagan.tawari.cs@ghrcem.raisoni.net
        </p>
      </div>
    </div>
    
    <div className="border-t border-[#3C3D37]/30 mt-8 pt-6 text-center text-gray-800">
      <p>© {new Date().getFullYear()} DIY Club GHRCEM. All rights reserved.</p>
      <p className="mt-1">Made by Mayur Bhong</p>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
}

export default Home;