import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/login')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-gray-700 text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Solution</h1>
      <p className="text-lg md:text-xl mb-6">Empowering your journey with cutting-edge technology and innovative tools.</p>
      <button onClick={handleClick} className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-700 transition duration-300">Get Started</button>
    </div>
  );
};

export default Hero;
