import React from 'react';
import PropTypes from 'prop-types';

import styles from './fields.module.scss';

const FormInput = (props) => {
  const {
    fieldLabel,
    name,
    id,
    type,
    touched,
    errors,
    handleChange,
    handleBlur,
    value,
  } = props;

  return (
    <label
      name={name}
      htmlFor={id}
      className={`${styles.root} ${touched && errors ? styles.required : null}`}
    >
      {fieldLabel}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={fieldLabel}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      ></input>
    </label>
  );
};

FormInput.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  touched: PropTypes.string,
  errors: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
