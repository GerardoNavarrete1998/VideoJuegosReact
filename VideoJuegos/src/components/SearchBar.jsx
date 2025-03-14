const SearchBar = ({ onSearch }) => {
  //Barra de busqueda en el sitio web
    return (
      <input 
        type="text" 
        placeholder="Buscar juegos..." 
        className="search-bar"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  