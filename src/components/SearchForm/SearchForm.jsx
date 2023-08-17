import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import classNames from 'classnames';

const SearchForm = ({handleSubmit, localQuery, onShortChange, isChecked}) => {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(localQuery);
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault()
    if(!query){
      setError(true)
      return
    }
    setError(false)
    handleSubmit(query)
  };

  return (
    <>
      <div className={styles.searchForm}>
        <form action="" className={styles.searchForm__form} onSubmit={onSubmit}>
          <label className={styles.searchForm__label}>
          <input type="text" name="search" className={styles.searchForm__searchField} placeholder="Фильм" onChange={onChange} value={query??''}/>
          <button className={classNames(styles.searchForm__searchButton,'opacity_btn')} type="submit" >Найти</button>
          </label>
          {error?<span>error</span>:null}
        </form>
        <FilterCheckbox onChange={onShortChange} isChecked={isChecked}/>
      </div>
    </>
  );
};

export default SearchForm;