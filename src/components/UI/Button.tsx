import React from 'react';

import classes from 'components/UI/Button.module.css';

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type: 'button';
  onChange: () => void | any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onChange}
      className={classes.button}
    >
      {props.children}
    </button>
  );
};

export { Button };
