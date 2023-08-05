import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({text, status }) => {
  return (
    <button type={'submit'} className={styles.submitButton}>{text}</button>
  );
};

export default SubmitButton;