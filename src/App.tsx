import React from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <div className="App">
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
