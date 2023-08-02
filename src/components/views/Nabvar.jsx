
import { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { RedesSociales } from "../utils";

export const Nabvar = () => {
  const [datos, setDatos] = useState(false);

  const changeVisible = () => {
   
      setDatos(!datos);


  };

  return (
    <>
    <RedesSociales/>
    <hr className="text-white"/>
      <nav className={datos? "items-center justify-between bg-[--color4] p-4" : " flex flex-row items-center justify-between bg-[--color4] p-4"}>

   {/* <nav className=" flex flex-row items-center justify-between bg-[--color4] p-4">*/} 
      <div className="flex flex-row  items-center  w-full top-0">
        <img src={logo} alt="logo mariposas" className="h-20" />

        <h1 className="text-white ">Mariposas App</h1>

        <button
          className="block lg:hidden border border-gray-200 p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:text-white ml-auto"
          onClick={changeVisible}
        >

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div>
 
        <ul
          className={
            datos
              ? "flex flex-col gap-9 h-screen justify-center items-center animate-fadeIn"
              : "hidden lg:flex lg:space-x-4 justify-end"
          }
        
        >
          <li onClick={()=> setDatos(false)}>
            <Link to="/" className="text-white hover:text-blue-300" >Inicio</Link>
          </li>
          <li onClick={()=> setDatos(false)}>
            <Link to="/noticias" className="text-white hover:text-blue-300">Noticias</Link>
          </li>
          <li onClick={()=> setDatos(false)}>
            <Link to="/clasificados" className="text-white hover:text-blue-300">Clasificados</Link>
          </li>
          <li onClick={()=> setDatos(false)}>
            <Link to="/auth/login" className="text-white hover:text-blue-300">Logearse</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  
  );
};