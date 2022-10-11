import React, { useEffect, useRef } from 'react';
import { Card } from 'components/UI/Card';
import classes from 'components/result/Result.module.css';

export interface ResultProps {
  value: number | null;
  prevValueRef?: number | null;
}

const Result: React.FC<ResultProps> = (props) => {
  const prevValueRef = useRef<null | string>(null);

  useEffect(() => {
    if (props.value) prevValueRef.current = props.value.toString();
  }, [props.value]);

  return (
    <Card className={classes.result}>
      <div className={classes.result__content}>
        <h2>Previous value</h2>
        <p>{prevValueRef.current || '?'}</p>
      </div>

      <div className={classes.result__content}>
        <h2>Current value</h2>
        <p>{props.value || '0'}</p>
      </div>
    </Card>
  );
};
export { Result };
