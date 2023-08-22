import React from 'react';
import styles from './UserInput.module.css';
import classNames from 'classnames';

const UserInput = ({name, type, placeholder, onChange, value, maxLength, minLength, errors}) => {
  console.log(errors[type]);
  return (
    <>
      <label htmlFor={name} className={styles.userInput__label}>{name}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} minLength={minLength} maxLength={maxLength} value={value} className={styles.userInput} required/>
      <span className={classNames(styles.userInput__err, {[styles.userInput__err_active]: errors[type]})}>{errors[type]??`Что-то пошло не так. Стандартная ошибка.`}</span>
    </>
  );
};

export default UserInput;