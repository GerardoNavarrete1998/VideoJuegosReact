import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import "../styles/index.css";  

const Home = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Máximo 10 páginas

  // Estado del modo oscuro
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Cargar juegos según los filtros y búsqueda
  useEffect(() => {
    fetchGames(search, filters, currentPage).then(({ games }) => {
      setGames(games);
    });
  }, [search, filters, currentPage]);

  // Auto-scroll a la sección de filtros
  useEffect(() => {
    const filtersSection = document.getElementById("filtersSection");
    if (filtersSection) {
      filtersSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // Aplicar modo oscuro
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`main-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <h1>Catálogo de Videojuegos</h1>

        {/* Switch de Modo Oscuro */}
        <div className="dark-mode-toggle">
          <span>🌙 Modo Oscuro</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </header>
      
      <SearchBar onSearch={setSearch} />
      
      {/* Sección de filtros */}
      <div id="filtersSection" className="filters-container">
        <Filters onFilter={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))} />
      </div>

       {/* Paginación */}
       <div className="pagination">
        <button 
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} 
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button 
            key={page} 
            onClick={() => setCurrentPage(page)} 
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage >= totalPages}
        >
          Siguiente
        </button>
      </div>

      {/* Contenedor de juegos */}
      <div className="grid-container">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} 
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button 
            key={page} 
            onClick={() => setCurrentPage(page)} 
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage >= totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
