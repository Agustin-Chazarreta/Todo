import React from "react";

const Form = ({ setInputText, allTasks, setAllTasks, inputText }) => {
  const inputHandlerText = (e) => {
    setInputText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAllTasks([
      ...allTasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form>
        <input value={inputText} onChange={inputHandlerText}></input>
        <button onClick={onSubmitHandler}>Add</button>
      </form>
    </div>
  );
};
export default Form;
