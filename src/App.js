import React from "react";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todo";
import EditPart from "./components/editTodo";
import './App.css';
const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <EditPart />
  </div>
);

export default App;