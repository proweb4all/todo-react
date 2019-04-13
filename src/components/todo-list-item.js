import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const style = {color: important ? 'red' : 'green'}
  return (<span style={style}>{label}</span>)
}
export default TodoListItem;