import React from 'react';
import { Card } from 'components/UI/Card';
import { Button } from 'components/UI/Button';
import classes from 'components/counter/Counter.module.css';
interface CounterProps {
  onChange: (value: number) => void;
  value: number | null;
}

export const Counter: React.FC<CounterProps> = ({ onChange, value }) => {
  const increaseValueHandler = () => {
    if (!value && value !== 0) {
      onChange(1);
    } else {
      onChange(value + 1);
    }
  };

  const decreaseValueHandler = () => {
    if (!value && value !== 0) {
      onChange(-1);
    } else {
      onChange(value - 1);
    }
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
