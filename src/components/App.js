import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["New Todo"]);

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.useMemo</h1>
      <UseMemo todos={todos} addTodo={addTodo} />
      <h1>React.memo</h1>
      <ReactMemo />
    </div>
  );
};

export default App;
