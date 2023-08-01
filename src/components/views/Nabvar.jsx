import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Nabvar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className="bg-[--color4] p-4 text-black mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Mi Sitio Web
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-300"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden md:flex space-x-4 ${menuOpen ? "md:hidden" : ""}`}>
          <li>
            <Link to="/" className="text-white hover:text-blue-300">Inicio</Link>
          </li>
          <li>
            <Link to="/noticias" className="text-white hover:text-blue-300">Noticias</Link>
          </li>
          <li>
            <Link to="/clasificados" className="text-white hover:text-blue-300">Clasificados</Link>
          </li>
          <li>
            <Link to="/auth/login" className="text-white hover:text-blue-300">Logearse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


