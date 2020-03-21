import React from 'react';
import PropTypes from 'prop-types';

import styles from './fields.module.scss';

const FormSubmit = (props) => {
  const { disabled, label } = props;

  return (
    <button className={styles.submit} type="submit" disabled={disabled}>
      {label}
    </button>
  );
};

FormSubmit.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormSubmit;
