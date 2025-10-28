import React from 'react'

function TodoList(props) {
    const { todos, handleComplete } = props;
  return (
    <div>
        <h3>Child Component</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
              {todo.completed ? "": (
                <button onClick={() => handleComplete(todo.id)}>Complete</button>
              )}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList