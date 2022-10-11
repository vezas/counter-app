import React, { useState } from 'react';

import classes from 'App.module.css';
import { Counter } from 'components/counter/Counter';
import { Result } from 'components/result/Result';

const App: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  return (
    <div className={classes.app}>
      <Counter onChange={(value) => setCurrentValue(value)} />
      <Result value={currentValue} />
    </div>
  );
};

export { App };
