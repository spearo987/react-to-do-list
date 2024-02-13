import { useState } from 'react'
import './App.css'
import { ToDo } from './components/ToDo'
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

const TODOS = [
  {id: 1, label: "Finir la todo-list", checked: false},
  {id: 2, label: "Avancer sur la todo-list", checked: false},
  {id: 3, label: "Finir la documentation", checked: false},
  {id: 4, label: "Finir de faire les choses", checked: false}
]

const maxId = TODOS.reduce((maxValue, currentValue) => maxValue.id < currentValue.id ? currentValue : maxValue).id

function App() {

  const [toDoItem, setToDoItem] = useState('');
  const [toDoList, setToDoList] = useState(TODOS);
  const [toDoId, setToDoId] = useState(maxId);
  const [displayOnlyNotDone, setDisplayOnlyNotDone] = useState(false);

  const handleRemoveToDoClick = (id) => {
    setToDoList(toDoList.filter((task) => task.id != id))
  }

  const handleEditToDoClick = (id) => {
    console.log("Edit the item n°", id);
  }

  const handleDisplayOnlyNotDone = () => {
    setDisplayOnlyNotDone(!displayOnlyNotDone)
    // setToDoList(toDoList.filter((task) => {
    //   console.log("Task : ", task);
    //   task.checked === true
    // }))
  }

  const allTodos = toDoList.map((todo) => <ToDo key={todo.id} id={todo.id} label={todo.label} checked={todo.checked} handleRemoveToDoClick={handleRemoveToDoClick} handleEditToDoClick={handleEditToDoClick}/>)

  return <div>
    {allTodos}
    <AddToDoBar toDoItem={toDoItem} setToDoItem={setToDoItem} toDoList={toDoList} setToDoList={setToDoList} toDoId={toDoId} setToDoId={setToDoId}/>
    <Checkbox checked={displayOnlyNotDone} onChange={handleDisplayOnlyNotDone} label="Montrer les tâches non terminées" id="unfinished-task" />
  </div>
    
}

function AddToDoBar({toDoItem, setToDoItem, toDoList, setToDoList, toDoId, setToDoId}){

  const handleClick = () => {

    if (toDoItem != '') {
      let toAdd = {}

      toAdd.label = toDoItem;
      toAdd.id = toDoId+1;
      toAdd.checked = false;

      setToDoList([...toDoList, toAdd])
      setToDoItem(toDoItem = '')
      setToDoId((toDoId) => toDoId + 1)
    }
  }

  return <div>
    <Input id="add-to-do" 
      placeholder="Add a to-do" 
      onChange={setToDoItem} 
      value={toDoItem}/>
    <Button label={"Ajouter"} 
      handleClick={handleClick}
      disabled={toDoItem}/>
  </div>
}

export default App
