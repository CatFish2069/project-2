import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <nav className="flex space-x-4">
        <Link to="/home" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
    </div>
  );
};

export default Landing;