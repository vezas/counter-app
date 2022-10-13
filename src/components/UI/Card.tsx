import React from 'react';

import classes from 'components/UI/Card.module.css';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};
