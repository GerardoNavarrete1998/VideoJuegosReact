import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async (searchQuery = "", filters = {}) => {
  let url = `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic`;

  // Parámetro de búsqueda
  if (searchQuery) {
    url += `&search=${encodeURIComponent(searchQuery)}`;
  }

  // Filtro por año (usando fechas)
  if (filters.year) {
    url += `&dates=${filters.year}-01-01,${filters.year}-12-31`;
  }

  // Filtro por género
  if (filters.genre) {
    url += `&genres=${encodeURIComponent(filters.genre)}`;
  }

  // Filtro por plataformas
  if (filters.platforms) {
    url += `&platforms=${encodeURIComponent(filters.platforms)}`;
  }

  // Filtro por tags
  if (filters.tags) {
    url += `&tags=${encodeURIComponent(filters.tags)}`;
  }

  // Filtro por desarrollador
  if (filters.developer) {
    url += `&developers=${encodeURIComponent(filters.developer)}`;
  }

  try {
    const response = await axios.get(url);
    const data = response.data.results || [];

    // Filtrado local: para refinar la búsqueda si se ingresa un término
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return data.filter((game) =>
        game.name && game.name.toLowerCase().includes(searchLower)
      );
    }

    return data;
  } catch (error) {
    console.error("Error al obtener la lista de juegos:", error);
    return [];
  }
};

export const fetchGameDetails = async (id) => {
  try {
    const url = `${BASE_URL}/games/${id}?key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los detalles del juego:", error);
    return null;
  }
};
