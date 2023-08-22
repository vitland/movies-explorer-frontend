import React from 'react';
import styles from './SubmitButton.module.css';
import classNames from 'classnames';

const SubmitButton = ({text, status }) => {
  console.log(status);
  return (
    <button type={'submit'} className={classNames(styles.submitButton,
      { [styles.submitButton_inActive]: !status, 'opacity_btn': status })} disabled={!status}>{text}</button>
  );
};

export default SubmitButton;