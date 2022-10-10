import React, { useEffect, useRef } from 'react';

import Card from './../UI/Card';
import { ResultProps } from '../../interfaces';
import classes from './Result.module.css';

const Result: React.FC<ResultProps> = (props) => {
  const prevValueRef = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    if (props.value) prevValueRef.current!.innerText = props.value!.toString();
  }, [props.value]);

  return (
    <Card className={classes.result}>
      <div>
        <h2>Previous value</h2>
        {prevValueRef.current?.innerText || '?'}
      </div>

      <div>
        <h2>Current value</h2>
        <p ref={prevValueRef}>{props.value || '0'}</p>
      </div>
    </Card>
  );
};
export default Result;
