import React, { useState } from 'react';

import classes from 'App.module.css';
import { Counter } from 'components/counter/Counter';
import { Result } from 'components/result/Result';

export const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  const onChange = (value: number) => {
    setCurrentValue(value);
  };

  return (
    <div className={classes.app}>
      <Counter onChange={onChange} value={currentValue} />
      <Result value={currentValue} />
    </div>
  );
};
