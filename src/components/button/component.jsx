import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

export const Button = ({ size, label, width, children, ...props }) => {
  const classes = `
		${styles.container}
		${styles[`${size}`]}
		${styles[`${width}`]}
	`;

  return (
    <button type="button" className={classes} {...props}>
      {label ? label : children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  width: PropTypes.oneOf(['auto', 'full']),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'medium',
  label: '',
  width: 'auto',
};
