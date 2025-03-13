import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import "../styles/index.css";  // Asegúrate de importar el CSS global

const Home = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchGames(search, filters).then(setGames);
  }, [search, filters]);

  return (
    <div className="p-4">
      {/* Header profesional */}
      <header className="header">
        <h1>Catálogo de Videojuegos</h1>
      </header>
      
      {/* Buscador */}
      <SearchBar onSearch={setSearch} />
      
      {/* Filtros */}
      <div className="filters-container">
        <Filters onFilter={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))} />
      </div>

      {/* Contenedor de la grilla */}
      <div className="grid-container">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
