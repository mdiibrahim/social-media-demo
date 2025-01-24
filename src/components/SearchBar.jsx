import "./SearchBar.css";
import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by user name..."
      />
    </div>
  );
};
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
