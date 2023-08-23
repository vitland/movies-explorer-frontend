import React from 'react';
import styles from './FilterCheckbox.module.css';


const FilterCheckbox = ({isChecked, onChange}) => {

  return (
    <>
      <input type="checkbox" checked={isChecked||false} className={styles.FilterCheckbox__toggleButton} id="toggle" onChange={onChange}/>
      <label htmlFor="toggle" className={styles.FilterCheckbox__toggleLabel} >Короткометражки</label>
    </>
  );
};

export default FilterCheckbox;