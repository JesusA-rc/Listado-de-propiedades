import React, { useState } from 'react';
import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className={styles.search}>
      <input type="text" placeholder="Buscar propiedades..." value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;