import React from 'react';
import PropTypes from 'prop-types';

const FormSubmit = (props) => {
  const { disabled, label } = props;

  return (
    <button type="submit" disabled={disabled}>
      {label}
    </button>
  );
};

FormSubmit.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormSubmit;
