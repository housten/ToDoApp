import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <label htmlFor="new-todo">New Todo</label>
      <input id="new-todo" type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;