import React from 'react';
import { NavLink, replace, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="#" className="text-2xl font-bold text-cyan-700">ReactApp</NavLink>
        <ul className="hidden md:flex space-x-6 text-gray-700">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-red-800 font-bold" : "hover:text-gray-900"}
        >
          Home
        </NavLink>
          <NavLink to="/product" className={({ isActive }) => isActive ? "text-red-800 font-bold" : "hover:text-gray-900"}>Product</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-800 font-bold" : "hover:text-gray-900"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-800 font-bold" : "hover:text-gray-900"}>Contact</NavLink>
        </ul>
        <button
         onClick={()=>navigate('/contact', {replace:true})}
         className="hidden md:block bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700">
         Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
