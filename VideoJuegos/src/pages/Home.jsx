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

  useEffect(() => {
    fetchGames(search, filters, currentPage).then(({ games }) => {
      setGames(games);
    });
  }, [search, filters, currentPage]);

  useEffect(() => {
    const filtersSection = document.getElementById("filtersSection");
    if (filtersSection) {
      filtersSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="main-container">
      <header className="header">
        <h1>Catálogo de Videojuegos</h1>
      </header>
      
      <SearchBar onSearch={setSearch} />
      
      {/* Sección de filtros con ID */}
      <div id="filtersSection" className="filters-container">
        <Filters onFilter={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))} />
      </div>

      {/* Contenedor de juegos sin overflow para evitar doble scroll */}
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
  