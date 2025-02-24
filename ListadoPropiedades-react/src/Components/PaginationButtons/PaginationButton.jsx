import React from 'react'
import styles from './PaginationButtons.module.css'

const PaginationButton = ({nextPage,prevPage,currentPage,properties,propertiesPerPage}) => {
  return (
    <div className={styles.pagination_buttons}>
        <button onClick={prevPage} disabled={currentPage === 1}> Anterior</button>
        <span>Página {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(properties.length / propertiesPerPage)}>
          Siguiente
        </button>
    </div>
  )
}

export default PaginationButton