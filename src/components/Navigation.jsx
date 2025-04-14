import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUsers, FaEnvelope, FaCalendarAlt, FaImages } from 'react-icons/fa';

export default function Navigation(){
    const location = useLocation();
  
    const navItems = [
      { to: '/', label: 'Home', icon: <FaHome /> },
      { to: '/about', label: 'About', icon: <FaInfoCircle /> },
      { to: '/events', label: 'Events', icon: <FaCalendarAlt /> },
      { to: '/gallery', label: 'Gallery', icon: <FaImages /> },
      { to: '/team', label: 'Team', icon: <FaUsers /> },
      { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    ];
    
    return (
      <>
        <header className="hidden md:block w-full fixed top-0 z-50 bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              NSS
            </Link>
            <nav className="flex space-x-6 text-gray-700 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`hover:text-black ${
                    location.pathname === item.to ? 'text-black font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <svg
            className="absolute top-full left-0 w-[40px] h-[40px]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 100 C 0 40, 20 10, 100 0"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          
          <svg
            className="absolute top-full right-0 w-[40px] h-[40px] rotate-90"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 100 C 0 40, 20 10, 100 0"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </header>
        
        <div className="md:hidden fixed top-0 left-0 w-full bg-transparent px-4 py-3 z-50">
          <Link to="/" className="text-xl font-bold text-white bg-[rgba(50,50,50,0.2)] px-2">
            NSS
          </Link>
        </div>
        
        <nav className="fixed bottom-0 w-full bg-[rgba(222,212,212,0.1)] backdrop-blur-2xl border-t shadow md:hidden z-50 p-2">
          <div className="flex justify-around text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center py-1 w-full ${
                  location.pathname === item.to ? 'text-gray-100 font-medium' : 'text-gray-400'
                }`}
              >
                <div className="text-[18px] mb-0.5">{item.icon}</div>
                <span className="text-[12px]">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </>
  )
}
