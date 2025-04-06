// src/components/MemoriesRow.jsx
import React from 'react';

const MemoriesRow = () => {
  const memories = [
    {
      image: "src/img/img10.jpg",
    },
    {
      image: "src/img/img11.jpg",
    },
    {
      image: "src/img/img12.jpg",
    },
    {
      image: "src/img/img15.jpg",
    },
    {
      image: "src/img/img14.jpg",
    },
    {
      image: "src/img/img13.jpg",
    },
  ];

  return (
    <div className="bg-[#F0F7F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Featured Memories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {memories.map((memory, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{memory.title}</h3>
                <p className="text-gray-200">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesRow;