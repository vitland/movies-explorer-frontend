import React from 'react';
import styles from './Error.module.css';

const Error = ({msg}) => {
  return (
    <div className={styles.error}>
      <p className={styles.error__msg}>{msg}</p>
    </div>
  );
};

export default Error;