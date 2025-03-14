import { useNavigate } from "react-router-dom";

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const fallbackImage = "/images/fallback.jpg";

  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };
    //Juegos recibido por la api y mostrado en HOME con forma de cards
  return (
    <div className="game-card" onClick={handleClick}>
        <img
        src={game.background_image || fallbackImage} // Usa la imagen del juego o la de respaldo
        alt={game.name}
        onError={(e) => (e.target.src = fallbackImage)} // Si la imagen no carga, usa la de respaldo
      />
      <h2>{game.name}</h2>
      <p>Puntuación: {game.metacritic}</p>
    </div>
  );
};

export default GameCard;