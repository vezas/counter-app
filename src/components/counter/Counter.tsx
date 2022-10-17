import React from 'react';
import { Card } from 'components/UI/Card';
import { Button } from 'components/UI/Button';
import classes from 'components/counter/Counter.module.css';
interface CounterProps {
  onChange: (value: number) => void;
  value: number;
}

export const Counter: React.FC<CounterProps> = ({ onChange, value }) => {
  const increaseValueHandler = () => {
    onChange(value + 1);
  };

  const decreaseValueHandler = () => {
    onChange(value - 1);
  };

  return (
    <Card>
      <div>
        <Button className={classes.form__button} type='button' onChange={increaseValueHandler}>
          Increase
        </Button>
        <Button className={classes.form__button} type='button' onChange={decreaseValueHandler}>
          Decrease
        </Button>
      </div>
    </Card>
  );
};
