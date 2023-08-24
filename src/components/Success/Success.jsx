import React from 'react';
import styles from './Success.module.css';
import classNames from 'classnames';

const Success = ({msg, type}) => {
  return (
    <div className={styles.success}>
      <span className={classNames("styles.success__msg", { [styles.success__msg_profile]: type })}>{msg}</span>
    </div>
  );
};

export default Success;