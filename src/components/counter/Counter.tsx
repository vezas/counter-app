import React, { useState, useEffect } from 'react';

import Card from './../UI/Card';
import Button from '../UI/Button';
import { CounterProps } from '../../interfaces';
import classes from './Counter.module.css';

const Counter: React.FC<CounterProps> = (props) => {
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  useEffect(() => {
    props.onValueHandler(currentValue);
  }, [currentValue, props]);

  const increaseValueHandler = () => {
    setCurrentValue((prevValue) => prevValue! + 1);
  };
  const decreaseValueHandler = () => {
    setCurrentValue((prevValue) => prevValue! - 1);
  };

  return (
    <Card>
      <div>
        <Button
          className={classes.form__button}
          type='submit'
          onClick={increaseValueHandler}
        >
          Increase
        </Button>
        <Button
          className={classes.form__button}
          type='submit'
          onClick={decreaseValueHandler}
        >
          Decrease
        </Button>
      </div>
    </Card>
  );
};

export default Counter;
