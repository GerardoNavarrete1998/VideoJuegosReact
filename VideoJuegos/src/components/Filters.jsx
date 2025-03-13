const Filters = ({ onFilter }) => {
    return (
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
          <option value="rpg">RPG</option>
          <option value="strategy">Estrategia</option>
        </select>
  
        {/* Filtro por Plataformas */}
        <select 
          className="p-2 border rounded" 
          onChange={(e) => onFilter("platforms", e.target.value)}
        >
          <option value="">Plataformas</option>
          <option value="pc">PC</option>
          <option value="playstation">PlayStation</option>
          <option value="xbox">Xbox</option>
          <option value="nintendo">Nintendo</option>
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
    );
  };
  
  export default Filters;
  