import { Link } from "react-router-dom";

export const Nabvar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Mi Sitio Web
        </div>
        <ul className="flex space-x-4">
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

