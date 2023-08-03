import { useNavigate } from "react-router-dom";

export const ClasificadosHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Clasificados</h1>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
            onClick={() => navigate("/clasificados/trabajos")}
          >
            Trabajos
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
            onClick={() => navigate("/clasificados/articulos")}
          >
            Articulos
          </button>
        </div>
      </div>
    </div>
  );
};
