import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../services/api";
import "../styles/index.css";

const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        fetchGameDetails(id).then(setGame);
    }, [id]);

    if (!game) return <p>Cargando...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{game.name}</h1>
            <img src={game.background_image} alt={game.name} className="w-full h-64 object-cover rounded-md" />
            <p>Géneros: {game.genres.map(g => g.name).join(", ")}</p>
            <p>Puntuación: {game.metacritic}</p>
            <p>Plataformas: {game.platforms.map(p => p.platform.name).join(", ")}</p>
            <p>Año de lanzamiento: {game.released}</p>
        </div>
    );
};

export default GameDetail;
