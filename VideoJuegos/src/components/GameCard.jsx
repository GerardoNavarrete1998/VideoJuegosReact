import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} />
      <h2>{game.name}</h2>
      <p>Puntuación: {game.metacritic}</p>
      <Link to={`/game/${game.id}`}>Ver más</Link>
    </div>
  );
};

export default GameCard;
