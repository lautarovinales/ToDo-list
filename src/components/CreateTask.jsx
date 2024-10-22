import { useState } from 'react';
import style from '../styles/CreateTask.css';

function CreateTask({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName(''); // Limpia el campo de texto
    }
  };

  return (
    <form onSubmit={handleSubmit} id='form-CreateTask'>
      <input
        type="text"
        placeholder='Nombre de la Tarea'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
}

export default CreateTask;
