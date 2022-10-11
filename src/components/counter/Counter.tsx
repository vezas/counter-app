import React, { useState, useEffect } from 'react';
import { Card } from 'components/UI/Card';
import { Button } from 'components/UI/Button';
import classes from 'components/counter/Counter.module.css';
export interface CounterProps {
  onChange: (value: number | null) => void;
}

const Counter: React.FC<CounterProps> = (props) => {
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  useEffect(() => {
    props.onChange(currentValue);
  }, [currentValue, props]);

  ////////////////////////////////////////// STILL ERROR WITHOUT ' ! '
  // const increaseValueHandler = () => {
  //   if (currentValue === null) {
  //     setCurrentValue(0);
  //   } else {
  //     setCurrentValue((prevValue) => prevValue + 1);
  //   }
  // };

  // const decreaseValueHandler = () => {
  //   if (currentValue === null) {
  //     setCurrentValue(0);
  //   } else {
  //     setCurrentValue((prevValue) => prevValue - 1);
  //   }
  // };

  ////////////////////////////////////////// STILL ERROR WITHOUT ' ! '
  // const increaseValueHandler = () => {
  //   if (!currentValue && currentValue !== 0) {
  //     setCurrentValue(0);
  //   } else {
  //     setCurrentValue((prevValue) => prevValue + 1);
  //   }
  // };

  // const decreaseValueHandler = () => {
  //   if (!currentValue && currentValue !== 0) {
  //     setCurrentValue(0);
  //     console.log('nulll');
  //   } else {
  //     setCurrentValue((prevValue) => prevValue - 1);
  //   }
  // };

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
          type='button'
          onChange={increaseValueHandler}
        >
          Increase
        </Button>
        <Button
          className={classes.form__button}
          type='button'
          onChange={decreaseValueHandler}
        >
          Decrease
        </Button>
      </div>
    </Card>
  );
};

export { Counter };
