import React from 'react';
import classes from './App.module.css';
import Counter from './components/Counter';
import Result from './components/Result';

function App() {
  return (
    <div className={classes.app}>
      <Counter />
      <Result />
    </div>
  );
}

export default App;
