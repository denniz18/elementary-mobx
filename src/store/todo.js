import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    { id: 1, title: 'Learn English', completed: false },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn JavaScript', completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
  }
}

export default new Todo();
