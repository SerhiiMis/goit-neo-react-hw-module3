import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;
