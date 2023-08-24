import React from 'react';
import styles from './UserForm.module.css';
import Error from '../Error/Error';

const UserForm = ({ children, button, onSubmit, error }) => {
  return (
    <form className={styles.userForm} onSubmit={onSubmit}>
      <div className={styles.userForm__inputsContainer}>{children}</div>
      <Error msg={error.msg} type={true} />
      {button}
    </form>
  );
};

export default UserForm;
