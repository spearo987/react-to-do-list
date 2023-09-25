import { useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

function MainApp() {

  return (
    <section>
      <h1>To-do list</h1>
      <ToDoList/>
    </section>
  );
}


// Display list compoent
function ToDoList(){

  const [toDos, setNewTodos] = useState([
    {id:"tdi1", label: "To-do Item 1", checked:true},
    {id:"tdi2", label: "To-do Item 2", checked:false},
    {id:"tdi3", label: "To-do Item 3", checked:false}
  ])

  const handleToDoAddition = (toAdd) => {
    toAdd.id = toAdd.label.toLowerCase();
    toAdd.checked = false;
    setNewTodos([...toDos, toAdd])
  }

  const handleCheck = (e) => {
    if (e.checked){
      console.log("Previous state: ",this)
      e.checked = false 
      console.log("Unchecked") 
    }else{ 
      console.log("Previous state: ",e)
      e.checked = true; 
      console.log("Checked")
    } 
    // toDoItem.checked ? toDoItem.checked = false console.log("Unchecked"): toDoItem.checked = true; console.log("Checked")
  }

  return (
    <>
      <ul>
        {toDos.map((item) => (
          <ToDoListItem toDoItem={item} handleClick={handleCheck}/>
        ))}
      </ul>
      <AddToDoItem setListItems={handleToDoAddition} />
    </>
  )
}

// Display list item component
function ToDoListItem({ toDoItem, handleClick }) {

  return (
    <li key={toDoItem.label}>
      <input className="to-do-checkbox" type="checkbox" id={toDoItem.id} defaultChecked={toDoItem.checked} onClick={handleClick}></input>
      <label htmlFor={toDoItem.id}>{toDoItem.label}</label>
      <img className="to-do-icon" src="./modify.png" alt="Modify Item"></img>
      <img className="to-do-icon" src="./delete.png" alt="Modify Item"></img>
    </li>
  )
}


// Add Item component
function AddToDoItem({setListItems}) {

  const [newToDo, setNewToDo] = useState('')

  const handleFieldChange = (e) => {
    setNewToDo({label: e.target.value})
  }

  return (
    <>
      <input onChange={handleFieldChange} type="text"></input>
      <button onClick={() => setListItems(newToDo) }>Add new Item</button>
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
