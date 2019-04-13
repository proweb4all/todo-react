import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {
  const isLoggedIn = false;
  const loginBox = <span>Log in, please</span>;
  const welcomeBox = <span>Welcome Back</span>;
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false }
  ]
  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
      <span><br/>{ (new Date().toString()) }</span>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}
export default App;