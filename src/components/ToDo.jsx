import { useState } from "react"
import './ToDo.css'

/**
 * 
 * @param {integer} id 
 * @param {string} label 
 * @param {boolean} checked 
 * @param {(id) => void} handleRemoveToDoClick 
 * @returns 
 */
export function ToDo ({id, label, checked, handleRemoveToDoClick, handleEditToDoClick}){

  const [done, setDone] = useState(checked)

  return (
    <div className="to-do-item">
      <input type="checkbox" 
        id={id} 
        key={id} 
        checked={done} 
        onChange={(e) => setDone(e.target.checked)}/>
      <label htmlFor={id}>{label}</label>
      <span onClick={() => handleRemoveToDoClick(id)}><img src="./delete.png" alt="Delete To Do" /></span>
      <span onClick={() => handleEditToDoClick(id)}><img src="./modify.png" alt="Edit To Do" /></span>
    </div>
  )
}