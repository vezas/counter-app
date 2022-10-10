import React from 'react';

import { ButtonProps } from '../../interfaces';
import classes from './Button.module.css';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classes.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
