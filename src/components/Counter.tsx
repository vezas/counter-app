import React, { useState } from 'react';

import classes from './Counter.module.css';

const Counter = () => {
  // let initialValue: number = 0;
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  const increaseValueHandler = () => {
    setCurrentValue(currentValue! + 1);
    console.log(currentValue);
  };
  const decreaseValueHandler = () => {
    setCurrentValue(currentValue! - 1);
    console.log(currentValue);
  };

  return (
    <div className={classes.card}>
      <button type="submit" onClick={increaseValueHandler}>
        Increase
      </button>
      <button type="submit" onClick={decreaseValueHandler}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;

// w apce zrób komponent który się nazwie Counter, który będzie miał w środku obecną wartość (startujemy od 0) + dwa przyciski do inkrementowania i dekrementowaina tej wartości o 1
// spróbuj w aplikacji wyświetlić dwa takie countery, np. jeden obok drugiego albo jeden pod drugim tak, aby działały niezależnie
// do countera spróbuj dodać opcję, żeby np. po inkrementacji albo dekrementacji można było zobaczyć poprzednią wartość przed dokonaniem akcji, czyli np. jak masz w liczniku wartość 3 i dasz sobie minusa, to licznik powinien pokazać CI obecną wartość (2) + poprzednią wartość (3); na samym początku istnienia komponentu poprzednia wartość powinna być nullem
// jeśli do punktu 3 użyłeś useState do trzymania poprzedniej zmiennej, to spróbuj to zmienić na useRefa
