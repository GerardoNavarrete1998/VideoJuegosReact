import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importamos useNavigate
import { fetchGameDetails } from "../services/api";
import "../styles/index.css";

const GameDetail = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const navigate = useNavigate(); // Hook para navegar

    useEffect(() => {
        fetchGameDetails(id).then(setInfo);
    }, [id]);

    if (!info) return <p className="text-center text-lg mt-10">Cargando...</p>;

    return (
        <div className="info-container">
            <div className="info-card">
                <img src={info.background_image} alt={info.name} className="info-image" />
                <h1 className="info-title">{info.name}</h1>
                <p className="info-text"><strong>Géneros:</strong> {info.genres.map(g => g.name).join(", ")}</p>
                <p className="info-score">⭐ {info.metacritic || "No disponible"}</p>
                <p className="info-text"><strong>Plataformas:</strong> {info.platforms.map(p => p.platform.name).join(", ")}</p>
                <p className="info-text"><strong>Año de lanzamiento:</strong> {info.released}</p>

                {/* Botón para volver al Home */}
                <button className="info-button" onClick={() => navigate("/")}>
                    🏠 Volver al Home
                </button>
            </div>
        </div>
    );
};

export default GameDetail;
