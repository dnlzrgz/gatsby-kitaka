import React from 'react';
import PropTypes from 'prop-types';

import styles from './fields.module.scss';

const FormTextarea = (props) => {
  const {
    fieldLabel,
    name,
    id,
    maxLength,
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
      <textarea
        id="message"
        name="message"
        maxLength={maxLength}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </label>
  );
};

FormTextarea.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  touched: PropTypes.string,
  errors: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormTextarea;
