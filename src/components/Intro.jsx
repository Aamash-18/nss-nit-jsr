import React from 'react';
const events = [
  {
    name: 'Blood Donation',
    bg: 'bg-[#0b1120]', 
    image: './images/cloth.jpg',
  },
  {
    name: 'Cloth Donation',
    bg: 'bg-gradient-to-b from-[#2C3E50] to-[#1a2e44]',
    image: './images/cloth.jpg',
  },
  {
    name: 'Swachchhata Pakhwara',
    bg: 'bg-[#1d1d1d]', 
    image: './images/cloth.jpg',
  },
  {
    name: 'Run For Unity',
    bg: 'bg-gradient-to-b from-[#0a0a1a] to-[#111133]', // dark gray with a subtle purple undertone (solid color)
    image: './images/cloth.jpg',
  },
];




export default function Intro() {
  return (
    <div className="relative w-full">
      {events.map((event, idx) => (
        <div
        key={idx}
        className={`sticky top-0 h-screen z-[${10 + idx * 10}] ${event.bg} flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-6 md:px-12 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
              {event.name}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
