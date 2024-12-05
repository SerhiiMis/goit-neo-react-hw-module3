const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default SearchBox;
