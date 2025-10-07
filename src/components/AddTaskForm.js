import React, {useState} from "react";

function AddTaskForm({addTask}) {
  const[input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add a new task"
        vaue={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>  
    </form>
  );
}

export default AddTaskForm;