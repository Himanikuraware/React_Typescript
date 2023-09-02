import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
