import React from 'react';
import styles from './BlockHeader.module.css';

const BlockHeader = ({ title }) => {
  return (
    <h2 className={styles.header}>{title}</h2>
  );
};

export default BlockHeader;