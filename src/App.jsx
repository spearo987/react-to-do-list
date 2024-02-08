import { useState } from 'react'
import './App.css'
import { ToDo } from './components/ToDo'
import { Input } from './components/Input';
import { Button } from './components/Button';

const TODOS = [
  {id: 1, label: "Finir la todo-list", checked: false},
  {id: 2, label: "Avancer sur la todo-list", checked: false},
  {id: 3, label: "Finir la documentation", checked: false},
  {id: 4, label: "Finir de faire les choses", checked: false}
]

function App() {

  const [addToDo, setAddToDo] = useState("")

  const todos = [];
  
  for (let todo of TODOS) {
    todos.push(<ToDo key={todo.id} id={todo.id} label={todo.label} checked={todo.checked} />)
  }

  return <div>
    {todos}
    <AddToDoBar addToDo={addToDo} onAddToDo={setAddToDo} onAddToDoButtonClick={addToDo}/>
  </div>
    
}

function AddToDoBar({addToDo, onAddToDo}){
  return <div>
    <Input id="add-to-do" 
      placeholder="Add a to-do" 
      onChange={onAddToDo} 
      value={addToDo}/>
    <Button value={"Ajouter"} 
      onClick={(e) => {
        e.preventDefault()
        console.log('The link was clicked.')
      }}/>
  </div>
}

export default App
