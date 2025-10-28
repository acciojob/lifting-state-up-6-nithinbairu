import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Write Code", completed: false },
    { id: 3, title: "Pass Tests", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div data-testid="app">
      <h2>Todo App</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
