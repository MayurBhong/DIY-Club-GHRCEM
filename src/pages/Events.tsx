import React from 'react';

function Events() {
  const events = [
    {
      title: "Collage Making",
      image: "src/img/img6.jpg",
      description: "Collage making involves assembling various materials like paper, photos, and fabric to create a new artwork."
    },
    {
      title: "Cooking",
      image: "src/img/img4.jpg", 
      description: "Cooking is like love. It should be entered into with abandon or not at all. Cooking is more than just preparing food, it's an art, a science, and a way to connect with others. "
    },
    {
      title: "Canvas Clash",
      image: "src/img/img5.jpg", 
      description: "Creating posters involves combining visuals convey a message, whether for advertising, information, or decoration."
    },
    {
      title: "Best out of waste",
      image: "src/img/img7.jpg",
      description: "Best out of waste refers to the practice of creatively reusing discarded materials to create something new and useful, promoting sustainability and reducing waste."
    },
    {
      title: "Tattoo",
      image: "src/img/img8.jpg",
      description: "A tattoo, often featuring a writing implement or related imagery, can symbolize creativity, expression, or the power of words, offering a unique and artistic body adornment."
    },
    {
      title: "Sketching",
      image: "src/img/img9.jpg",
      description: "Sketching is a quick and expressive art form that captures ideas and observations with loose, simplified lines and forms."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-[#60B5FF] via-[#AFDDFF] via-[#A1E3F9] to-[#6A80B9] p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Events</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Square Image Container */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-lg">{event.title}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;