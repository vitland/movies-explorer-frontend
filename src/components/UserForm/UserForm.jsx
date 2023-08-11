import React from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ children, button }) => {
  return (
    <form className={styles.userForm}>
      <div className={styles.userForm__inputsContainer}>
        {children}
      </div>
      {button}
    </form>
  );
};

export default UserForm;