import React from 'react';
import styles from './UserInput.module.css';

const UserInput = ({name, type, placeholder, errorMsg}) => {
  return (
    <>
      <label htmlFor={name} className={styles.userInput__label}>{name}</label>
      <input type={type} name={name} placeholder={placeholder} className={styles.userInput} required/>
      <span className={styles.userInput__err}>Что-то пошло не так...</span>
    </>
  );
};

export default UserInput;