import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

// Número total de juegos que queremos en el sitio (400) y juegos por página (40)
const TOTAL_GAMES = 400;
const PAGE_SIZE = 40;
const TOTAL_PAGES = TOTAL_GAMES / PAGE_SIZE;

/**
 * Obtiene una lista de juegos, limitando a 400 en total con 40 por página.
 */
export const fetchGames = async (searchQuery = "", filters = {}, page = 1) => {
  if (page > TOTAL_PAGES) {
    return { games: [], totalPages: TOTAL_PAGES };
  }

  let url = `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=${PAGE_SIZE}&page=${page}`;

  if (searchQuery) {
    url += `&search=${encodeURIComponent(searchQuery)}&search_exact=true`; // 🔹 Búsqueda exacta
  }
  if (filters.year) url += `&dates=${filters.year}-01-01,${filters.year}-12-31`;
  if (filters.genre) url += `&genres=${encodeURIComponent(filters.genre)}`;
  if (filters.platforms) url += `&platforms=${filters.platforms}`;
  if (filters.tags) url += `&tags=${encodeURIComponent(filters.tags)}`;
  if (filters.developer) url += `&developers=${encodeURIComponent(filters.developer)}`;

  try {
    const response = await axios.get(url);
    return {
      games: response.data.results || [],
      totalPages: TOTAL_PAGES,
    };
  } catch (error) {
    console.error("Error al obtener la lista de juegos:", error);
    return { games: [], totalPages: TOTAL_PAGES };
  }
};

/**
 * Obtiene los detalles de un juego por ID.
 */
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
