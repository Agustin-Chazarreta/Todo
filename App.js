import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  return (
    <div>
      <Form
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        setInputText={setInputText}
        inputText={inputText}
      ></Form>
      <TodoList allTasks={allTasks} setAllTasks={setAllTasks}></TodoList>
    </div>
  );
}

export default App;
