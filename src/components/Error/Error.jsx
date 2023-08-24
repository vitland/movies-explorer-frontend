import React from 'react';
import styles from './Error.module.css';
import classNames from 'classnames';

const Error = ({msg, type}) => {
  return (
    <div className={styles.error}>
      <span className={classNames(styles.error__msg, { [styles.error__msg_profile]: type })}>{msg}</span>
    </div>
  );
};

export default Error;