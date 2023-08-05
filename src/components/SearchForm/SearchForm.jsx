import React from 'react';
import styles from './SearchForm.module.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <>
      <div className={styles.searchForm}>
        <form action="" className={styles.searchForm__form}>
          <label htmlFor="" className=""></label>
          <input type="text" name="search" className={styles.searchForm__searchField}
                 placeholder="Фильм"/>
          <button className={styles.searchForm__searchButton} type="submit">Найти</button>
        </form>
        <FilterCheckbox/>
      </div>
    </>
  );
};

export default SearchForm;