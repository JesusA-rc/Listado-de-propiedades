import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import SearchBar from '/src/Components/SearchBar/SearchBar';
import Filters from '/src/Components/Filters/Filters';
import PropertyCard from '/src/Components/PropertyCard/PropertyCard';
import propertiesData from '/src/data/properties';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import CardInfo from '../../Components/Cards/CardInfo';
import CardPropertie from '../../Components/Cards/CardPropertie';
import PaginationButton from '../../Components/PaginationButtons/PaginationButton';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const [properties, setProperties] = useState(propertiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage, setPropertiesPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setPropertiesPerPage(1); 
      } else {
        setPropertiesPerPage(4); 
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (query) => {
    const filtered = propertiesData.filter((property) =>
      property.title.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filtered);
    setCurrentPage(1);
  };

  const handleFilter = (filters) => {
    let filtered = propertiesData;
    console.log('filtro',filters.type);
    if (filters.type) {
      filtered = filtered.filter((property) => property.type === filters.type);
    }
    if (filters.minPrice) {
      filtered = filtered.filter((property) => property.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((property) => property.price <= filters.maxPrice);
    }

    setProperties(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const nextPage = () => {
    if(currentPage < Math.ceil(properties.length / propertiesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <section data-cards="cards-info" className={styles.cards_info}>
        <CardInfo
          titulo="Encuentra tu nuevo hogar"
          descripcion="Un hogar para ti y tu familia, encuentra el lugar perfecto para vivir." 
          urlImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJyqVx9PviD1rqIsUhLtHRVFDAbv6DOVm8Q&s"
        />
        <CardInfo
          titulo="Encuentra tu nuevo local"
          descripcion="Un lugar para tu negocio, encuentra el lugar perfecto para trabajar."
          urlImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6Dh1TJJT5v7-tXkfR7ISQngaDELmlsTRRA&s"
        />
      </section>

      <section className={styles.properties}>
        <h1>Propiedades</h1>
        <div className={styles.filters_container}>
          <div className={styles.search_container}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <Filters onFilter={handleFilter} />
          <div className={styles.properties_container}>
            {currentProperties.map((property) => (
              <CardPropertie 
                key={property.id}
                property={property} 
              />
            ))}
          </div>
          <div className={styles.pagination_container}>
            <PaginationButton 
              nextPage={nextPage} 
              prevPage={prevPage} 
              currentPage={currentPage} 
              properties={properties}
              propertiesPerPage={propertiesPerPage}  
            />
          </div>

        </div>
      </section>
      
      <Footer></Footer>
    </div>
  );
};

export default Home;