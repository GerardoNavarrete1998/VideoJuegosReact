const SearchBar = ({ onSearch }) => {
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
  