import React from 'react';

function TaskList({tasks, deleteTask, toggleComplete}) {
  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return(
    <ul>
      {tasks.map((task)=>(
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through":"none",cursor:"pointer",
            }}
              onClick={() => toggleComplete(task.id)}
          >    
            {task.text}
          </span>
          <button   
              onClick={()=> deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
