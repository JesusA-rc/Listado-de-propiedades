import React, { useState } from 'react'
import styles from './Hero.module.css'
import HeroImg from '/src/assets/heroImg.png'
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
  const [typePropertie,setTypePropertie] = useState(1);
  const heroText = ["Encuentra tu nuevo hogar","Encuentra tu nuevo local"];
  const [animate, setAnimate] = useState(false);

  const handleChangeType = (type) => {
    setAnimate(false); 
    setTimeout(() => {
      setTypePropertie(type); 
      setAnimate(true); 
    }, 50); 
  };

  return (
   <section className={styles.hero}>
    <div className={styles.containerImg_background}>
        <img src={HeroImg} alt="" />
    </div>
    <div className={styles.hero_text}>
        <h1 className={animate ? styles.fadeIn : ''}>{typePropertie===1? heroText[0] : heroText[1]}</h1>
    </div>
    <div className={styles.hero_section}>
      <div className={styles.hero_filter_buttons}>
        <button className={typePropertie ===1 ? styles.button_active : ''} onClick={() => handleChangeType(1)} >Residencial</button>
        <button className={typePropertie ===2 ? styles.button_active : ''} onClick={() => handleChangeType(2)} >Comercial</button>
      </div>
      <div className={styles.search_container}>
        <SearchBar></SearchBar>
      </div>
    </div>
   </section>
  )
}

export default Hero