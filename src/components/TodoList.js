import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div data-testid="todo-list">
      <ul>
        <h2>Child Component</h2>
      </ul>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            {todo.title}{" "}
            {todo.completed ? (
              <></>
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
