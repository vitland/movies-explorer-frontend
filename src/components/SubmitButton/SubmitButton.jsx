import React from 'react';
import styles from './SubmitButton.module.css';
import classNames from 'classnames';

const SubmitButton = ({ text, status, loading }) => {
  return (
    <button
      type={'submit'}
      className={classNames(styles.submitButton, {
        [styles.submitButton_inActive]: !status || loading,
        opacity_btn: status,
      })}
      disabled={!status || loading}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
