import React from 'react';

import { CardProps } from '../../interfaces';
import classes from './Card.module.css';

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
