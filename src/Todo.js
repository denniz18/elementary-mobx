import React from 'react';
import todo from './store/todo';
import { observer } from 'mobx-react-lite';

export const Todo = observer(() => {
  return (
    <div>
      {todo.todos.map((todoItem) => (
        <div className="todo" key={todoItem.id}>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => todo.completeTodo(todoItem)}
          />
          {todoItem.title}
          <button onClick={() => todo.removeTodo(todoItem.id)}>X</button>
        </div>
      ))}
    </div>
  );
});
