import { useNavigate } from "react-router-dom";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };
    //Juegos recibido por la api y mostrado en HOME con forma de cards
  return (
    <div className="game-card" onClick={handleClick}>
      <img src={game.background_image} alt={game.name} />
      <h2>{game.name}</h2>
      <p>Puntuación: {game.metacritic}</p>
    </div>
  );
};

export default GameCard;