import React from 'react';
import PropTypes from 'prop-types';

import styles from './submit.module.scss';

const FormSubmit = (props) => {
  const { disabled, label } = props;

  return (
    <button type="submit" className={styles.root} disabled={disabled}>
      {label}
    </button>
  );
};

FormSubmit.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormSubmit;
