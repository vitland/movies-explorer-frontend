import React from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ children }) => {
  return (
    <form className={styles.userForm}>
      {children}
    </form>
  );
};

export default UserForm;