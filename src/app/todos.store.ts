import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx';
import { TodosFilterStore } from './todos-filter.store';

export class Todo {
  completed = false;
  title: string;

  constructor({ title, completed = false }) {
    this.completed = completed;
    this.title = title;
  }
}

@Injectable()
export class TodosStore {

  @observable todos: Todo[] = [new Todo({ title: 'Learn Mobx' })];

  constructor(private _todosFilter: TodosFilterStore) { }

  @action
  addTodo({ title }: Partial<Todo>) {
    this.todos = [...this.todos, new Todo({ title })];
  }

  @computed
  get filteredTodos() {
    switch (this._todosFilter.filter) {
      case 'SHOW_ALL':
        return this.todos;
      case 'SHOW_COMPLETED':
        return this.todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return this.todos.filter(t => !t.completed);
    }
  }
}
