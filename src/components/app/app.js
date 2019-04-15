import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import AddItem from '../add-item';

export default class App extends Component {
  maxId = 0;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };
  createTodoItem(label) {
    return {
      label, 
      important: false, 
      done: false, 
      id: this.maxId++ 
    }
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newTodoData = [ ...todoData ];
      newTodoData.splice(idx, 1);
      return { todoData: newTodoData };
    })
  };
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newTodoData = [ ...todoData ];
      newTodoData.push(newItem);
      return { todoData: newTodoData };
    })
  };
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };
  onToggleImportant = (id) => {
    console.log('Toggle Important', id);
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'important') };
    })
  }
  onToggleDone = (id) => {
    console.log('Toggle Done', id)
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') };
    })
  }
  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter(
      (el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddItem onAdd={this.addItem} />
      </div>
    );
  };
};
