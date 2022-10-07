import React from 'react';
import classes from './App.module.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className={classes.app}>
      <Counter />
    </div>
  );
}

export default App;
