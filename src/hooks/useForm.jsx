import { useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    const target = e.target;
    const name = target.type;
    const value = target.value;
    if (name === 'email') {
      if (!isValidEmail(value)) {
        target.setCustomValidity('Некорректый E-mail');
      } else {
        target.setCustomValidity('');
      }
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return { values, handleChange, errors, isValid, setValues };
}
