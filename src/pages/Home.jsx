import { useState, useEffect } from 'react';
import Main from '../components/Main';
import CreateTask from '../components/CreateTask';
import Task from '../components/Task';
import Button from '../components/Button';

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeCompletedTasks = () => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    setTasks(incompleteTasks);
  };

  const clearTasks = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  return (
    <Main>
      <div id='task-list'>
        <CreateTask addTask={addTask} />
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            toggleTask={() => toggleTask(index)}
          />
        ))}
        <button onClick={clearTasks} id='button-clear'>
          Vaciar Lista
        </button>
        <Button reload={removeCompletedTasks} />
      </div>
    </Main>
  );
}

export default Home;
