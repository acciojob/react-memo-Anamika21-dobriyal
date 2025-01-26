import React, { useState, useMemo } from "react";

const UseMemo = ({ todos, addTodo }) => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 1000000;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>My todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  );
};

export default UseMemo;
