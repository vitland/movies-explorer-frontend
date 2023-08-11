import React from 'react';
import styles from './SubmitButton.module.css';
import classNames from 'classnames';

const SubmitButton = ({text, status }) => {
  return (
    <button type={'submit'} className={classNames(styles.submitButton, 'opacity_btn')}>{text}</button>
  );
};

export default SubmitButton;