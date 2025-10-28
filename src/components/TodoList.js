import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            {" "}
            {todo.completed ? (
              <span style={{ color: "green" }}>✔️ Completed</span>
            ) : (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
