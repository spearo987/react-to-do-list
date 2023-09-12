import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from 'react';

function MainApp() {

  return (
    <section>
      <h1>To-do list</h1>
      <ToDoList />
    </section>
  );
}

const ToDos= [
  {label: "To-do Item 1", id:"tdi1", checked:'true'},
  {label: "To-do Item 2", id:"tdi2", checked:'false'},
  {label: "To-do Item 3", id:"tdi3", checked:'false'}
]

function ToDoListItem({ toDoItem }) {
  return (
    <li>
      <input type="checkbox" id={toDoItem.id} defaultChecked={toDoItem.checked}></input>
      <label htmlFor={toDoItem.id}>{toDoItem.label}</label>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainApp />
      <Footer />
    </div>
  );
}

export default App;
