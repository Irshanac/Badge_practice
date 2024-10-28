import React, { useMemo, useState } from 'react';

const Basic = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Memoized calculation
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return items.reduce((acc, item) => acc + item, 0);
  }, [items]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Sum of Items: {expensiveCalculation}</h2> {/* Use the memoized value directly */}
      <button onClick={() => setItems([...items, items.length + 1])}>
        Add Item
      </button>
    </div>
  );
};

export default Basic;
