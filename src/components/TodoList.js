import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div data-testid="todo-list">
      <h3>Child Component</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            {todo.title}{" "}
            {todo.completed ? (
              <span
                style={{ color: "green" }}
                data-testid={`completed-${todo.id}`}
              >
                ✔️ Completed
              </span>
            ) : (
              <button
                data-testid={`complete-btn-${todo.id}`}
                onClick={() => handleComplete(todo.id)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
