import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Todo App", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo App</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
