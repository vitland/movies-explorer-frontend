import React from 'react';
import styles from './FilterCheckbox.module.css';


const FilterCheckbox = () => {
  return (
    <>
      <input type="checkbox" className={styles.FilterCheckbox__toggleButton} id="toggle"/>
      <label htmlFor="toggle" className={styles.FilterCheckbox__toggleLabel}>Короткометражки</label>
    </>
  );
};

export default FilterCheckbox;