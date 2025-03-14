const Filters = ({ onFilter }) => {
  return (
    <div id="filtersSection">
      <div className="flex flex-wrap gap-4 justify-center">
      {/* Filtro por Año */}
      <input 
        type="number" 
        placeholder="Año" 
        className="p-2 border rounded"
        onChange={(e) => onFilter("year", e.target.value)}
      />

      {/* Filtro por Género */}
      <select 
        className="p-2 border rounded" 
        onChange={(e) => onFilter("genre", e.target.value)}
      >
        <option value="">Género</option>
        <option value="action">Acción</option>
        <option value="adventure">Aventura</option>
        <option value="role-playing-games-rpg">RPG</option>
        <option value="strategy">Estrategia</option>
        <option value="shooter">Shooter</option>
        <option value="puzzle">Puzzle</option>
        <option value="racing">Carreras</option>
        <option value="sports">Deportes</option>
        <option value="fighting">Peleas</option>
        <option value="simulation">Simulación</option>
        <option value="arcade">Arcade</option>
        <option value="platformer">Plataformas</option>
        <option value="card">Cartas</option>
        <option value="family">Familiar</option>
        <option value="massively-multiplayer">Multijugador Masivo</option>
        <option value="board-games">Juegos de Mesa</option>
        <option value="indie">Indie</option>

      </select>

      {/* Filtro por Plataformas (Usando IDs) */}
      <select 
        className="p-2 border rounded" 
        onChange={(e) => onFilter("platforms", e.target.value)}
      >
        <option value="">Plataformas</option>
        <option value="4">PC</option>
        <option value="187,18,16,15,27,17,19">PlayStation</option>
        <option value="1,186,14">Xbox</option>
        <option value="7,8,9,13,10,11,105,83,24,43,26,80,49">Nintendo</option>
        <option value="171">Web</option>
        <option value="5">macOS</option>
        <option value="6">Linux</option>
        <option value="34">Android</option>
        <option value="21">iOS</option>
        <option value="28,31,23,22,25,50,51,112,113,77,111">Atari</option>
        <option value="166,167,107,119,106,117,74">SEGA</option>
        <option value="111,77,12,79">Otros</option>
      </select>

      {/* Filtro por Tags */}
      <input 
        type="text" 
        placeholder="Tags" 
        className="p-2 border rounded"
        onChange={(e) => onFilter("tags", e.target.value)}
      />

      {/* Filtro por Desarrollador */}
      <input 
        type="text" 
        placeholder="Desarrollador" 
        className="p-2 border rounded"
        onChange={(e) => onFilter("developer", e.target.value)}
      />
    </div>
    </div>
  );
};

export default Filters;
