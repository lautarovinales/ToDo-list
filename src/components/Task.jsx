import style from '../styles/Task.css';

function Task({ task, toggleTask }) {
  return (
    <form action="" id="task">
      <label className="checkbox-container">
        <input
          type="checkbox"
          id="checkbox"
          checked={task.completed}
          onChange={toggleTask}
        />
        <span className="custom-checkbox"></span>
        <p id="task-name">{task.name}</p>
      </label>
    </form>
  );
}

export default Task;
