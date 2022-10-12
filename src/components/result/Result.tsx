import React, { useEffect, useRef } from 'react';
import { Card } from 'components/UI/Card';
import classes from 'components/result/Result.module.css';

interface ResultProps {
  value: number | null;
  prevValueRef?: number | null;
}

export const Result: React.FC<ResultProps> = ({ value }) => {
  const prevValueRef = useRef<null | string>(null);

  useEffect(() => {
    if (value) {
      prevValueRef.current = value.toString();
    } else {
      prevValueRef.current = '0';
    }
  }, [value]);

  return (
    <Card className={classes.result}>
      <div className={classes.result__content}>
        <h2>Previous value</h2>
        <p>{prevValueRef.current || '?'}</p>
      </div>

      <div className={classes.result__content}>
        <h2>Current value</h2>
        <p>{value ?? '0'}</p>
      </div>
    </Card>
  );
};
