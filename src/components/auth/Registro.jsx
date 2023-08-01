import React, { useState } from "react";

export const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o guardarlos en el estado global de la aplicación.
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="nombre" className="block font-medium mb-1">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="apellido" className="block font-medium mb-1">
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="usuario" className="block font-medium mb-1">
          Usuario:
        </label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contraseña" className="block font-medium mb-1">
          Contraseña:
        </label>
        <input
          type="password"
          id="contraseña"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contraseña" className="block font-medium mb-1">
          Repetir Contraseña:
        </label>
        <input
          type="password"
          id="contraseña"
          name="contraseña"
         
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Registrarse
      </button>
    </form>
  );
};


