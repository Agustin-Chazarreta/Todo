import React from "react";
import Todo from "./Todo";
const TodoList = ({ allTasks, setAllTasks }) => {
  return (
    <div>
      {allTasks.map((task) => {
        return (
          <Todo
            task={task}
            key={task.id}
            text={task.text}
            setAllTasks={setAllTasks}
            allTasks={allTasks}
          ></Todo>
        );
      })}
    </div>
  );
};
export default TodoList;
