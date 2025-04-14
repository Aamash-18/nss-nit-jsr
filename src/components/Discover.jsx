import React from 'react'
import { FaUsers, FaFlask, FaGlobe } from 'react-icons/fa';

export const Discover = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tl from-black via-[#020b2c] to-[#14001a] text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            Discover. Grow. Impact.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Join us in creating a better tomorrow through
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            &nbsp;innovation, compassion,&nbsp;
          </span>
          and action.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10 justify-center text-center">
          {[
            {
              icon: <FaUsers />,
              title: 'Community Service',
              text: 'Engaging in meaningful service projects that address community needs and create positive impact.',
            },
            {
              icon: <FaFlask />,
              title: 'Skill Development',
              text: 'Building leadership, teamwork, and organizational skills through hands-on experience and training.',
            },
            {
              icon: <FaGlobe />,
              title: 'Social Awareness',
              text: 'Raising awareness about social issues and promoting a sense of responsibility towards society.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-purple-900/20 text-white p-8 rounded-xl shadow-lg backdrop-blur-md flex flex-col items-center text-center transition duration-300 transform hover:scale-105 hover:shadow-purple-500/30"
            >
              <div className="w-14 h-14 mb-4 bg-white/20 flex items-center justify-center rounded-full text-blue-300 text-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
