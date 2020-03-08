import React from 'react';
import PropTypes from 'prop-types';

const FormSubmit = (props) => {
  const { className, disabled, label } = props;

  return (
    <button type="submit" className={className} disabled={disabled}>
      {label}
    </button>
  );
};

FormSubmit.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormSubmit;
