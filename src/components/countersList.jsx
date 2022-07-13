import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 7, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
    { id: 5, value: 0, name: 'Сухое горючее' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    // console.log('handleDelete', id);
    const newCounters = counters.filter((el) => el.id !== id);
    setCounters(newCounters);
  };

  const handleIncrement = (id) => {
    // console.log('handleIncrement', id);
    const incrementedCounters = counters.slice(0);
    incrementedCounters[id].value++;
    setCounters(incrementedCounters);
  };

  const handleDecrement = (id) => {
    // console.log('decrement');
    const decrementedCounters = counters.slice(0);
    decrementedCounters[id].value--;
    setCounters(decrementedCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log('handleReset');
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
