import React, { useState } from 'react';
import { Button, Link } from "@nextui-org/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-2 max-w-[70%] sm:max-w-none overflow-hidden">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
              <path fill="white" d="M80.08 82.66L60.24 102.5L192.9 242.7v58.6h78v-50.9zm-25.4 40.14v80.3l4.01 2.7c10.56 7 14.74 14.1 15.93 19.8c1.18 5.8-.43 10.8-3.85 14.9c-6.86 8.3-19.91 12.3-32.73-.6l-12.72 12.8c19.18 19.1 46.13 15.1 59.27-.6c6.58-7.9 9.97-18.9 7.65-30.1c-2.05-10-8.72-19.7-19.56-28v-52.2zm258.02 52.5v144h-185c22.6 5.8 40.6 23.5 46.7 46H337c7.5-27.6 32.8-48 62.7-48s55.2 20.4 62.7 48h24.3v-84.6l-60.2-105.4zm36 14h62.1l54.7 92H348.7v-83zm-321.49 130l11.5 46h10.25c6.12-22.5 24.09-40.2 46.74-46zm84.49 16c-26.08 0-47.02 20.9-47.02 47s20.94 47 47.02 47c26.1 0 47-20.9 47-47s-20.9-47-47-47m288 0c-26.1 0-47 20.9-47 47s20.9 47 47 47s47-20.9 47-47s-20.9-47-47-47"/>
            </svg>
          </div>
          <div className="truncate">
            <h1 className="text-sm sm:text-xl font-bold text-gray-900 truncate">GrúasEléctricas</h1>
            <p className="text-[10px] sm:text-xs text-gray-600 truncate">Servicios Profesionales</p>
          </div>
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#servicios" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Nosotros
          </Link>
          <Link href="#proyectos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Botón "Llamar Ahora" visible solo en md+ */}
        <Button
          variant="solid"
          radius="lg"
          className="hidden md:flex bg-blue-600 rounded-lg items-center gap-2 text-white hover:bg-blue-700 text-sm md:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray="64"
              strokeDashoffset="64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
            </path>
          </svg>
          <span>Llamar Ahora</span>
        </Button>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-4 focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="#servicios" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
            Servicios
          </Link>
          <Link href="#nosotros" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
            Nosotros
          </Link>
          <Link href="#proyectos" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
            Proyectos
          </Link>
          <Link href="#contacto" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
