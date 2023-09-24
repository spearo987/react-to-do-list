import { useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

function MainApp() {

  return (
    <section>
      <h1>To-do list</h1>
      <ToDoList toDoList={ToDos}/>
    </section>
  );
}

const ToDos= [
  {label: "To-do Item 1", id:"tdi1", checked:true},
  {label: "To-do Item 2", id:"tdi2", checked:false},
  {label: "To-do Item 3", id:"tdi3", checked:false}
]

function ToDoListItem({ toDoItem }) {
  return (
    <li key={toDoItem.id}>
      <input className="to-do-checkbox" type="checkbox" id={toDoItem.id} defaultChecked={toDoItem.checked}></input>
      <label htmlFor={toDoItem.id}>{toDoItem.label}</label>
      <img className="to-do-icon" src="./modify.png" alt="Modify Item"></img>
      <img className="to-do-icon" src="./delete.png" alt="Modify Item"></img>
    </li>
  )
}

function ToDoList({toDoList}){
  return (
    <>
      <ul>
        {toDoList.map((item) => (
          <ToDoListItem toDoItem={item}/>
        ))}
      </ul>
      <AddToDoItem/>
    </>
  )
}

function AddToDoItem() {
  const [newToDo, setNewToDo] = useState('')

  const handleFieldChange = () => {

  }

  const handleAddToDo = () => {

  }

  return (
    <>
      <input onChange={handleFieldChange} type="text"></input>
      <button>Add new Item</button>
    </>
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
