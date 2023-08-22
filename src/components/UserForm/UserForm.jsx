import React from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ children, button, onSubmit, error }) => {

  return (
    <form className={styles.userForm} onSubmit={onSubmit}>
      <div className={styles.userForm__inputsContainer}>
        {children}
      </div>
      <>
      <span>{error?.msg}</span>
      {button}
      </>
    </form>
  );
};

export default UserForm;