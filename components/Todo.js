import React from "react";

const Todo = ({ text, allTasks, setAllTasks, task }) => {
  const deleteHandler = () => {
    setAllTasks(allTasks.filter((el) => el.id !== task.id));
  };
  return (
    <div>
      <li>{text}</li>
      <button>completed</button>
      <button onClick={deleteHandler}>trash</button>
    </div>
  );
};
export default Todo;
