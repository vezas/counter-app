import React from 'react';

import classes from 'components/UI/Card.module.css';

export interface CardProps {
  className?: string | undefined;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

// export default Card;
export { Card };
