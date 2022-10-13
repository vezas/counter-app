import React from 'react';

import classes from 'components/UI/Button.module.css';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type: 'button';
  onChange: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onChange, type, children }) => {
  return (
    <button type={type} onClick={onChange} className={classes.button}>
      {children}
    </button>
  );
};
