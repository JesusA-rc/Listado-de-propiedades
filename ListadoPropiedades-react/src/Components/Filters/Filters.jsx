import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({ type: '', minPrice: '', maxPrice: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({ type: '', minPrice: '', maxPrice: '' });
    onFilter({type: '', minPrice: '', maxPrice: ''});
  }

  return (
    <div className={styles.filters}>
      <select name="type" onChange={handleFilterChange} value={filters.type}> 
        <option value="">Todos los tipos</option>
        <option value="residencial">Residencial</option>
        <option value="comercial">Comercial</option>
      </select>
      <input value={filters.minPrice} type="number" name="minPrice" placeholder="Precio mínimo" min="0" onChange={handleFilterChange}/>
      <input value={filters.maxPrice} type="number" name="maxPrice" placeholder="Precio máximo" min="0" onChange={handleFilterChange}/>
      <button onClick={applyFilters}>Aplicar filtros</button>
      <button onClick={resetFilters} className={styles.reset_filters}>Limpiar filtros</button>
    </div>
  );
};

export default Filters;