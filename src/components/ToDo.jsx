import { useState } from "react"

/**
 * 
 */
export function ToDo ({id, label, checked}){

  const [done, setDone] = useState(checked)

  return (
    <div>
      <input type="checkbox" 
        id={id} 
        key={id} 
        checked={done} 
        onChange={(e) => setDone(e.target.checked)}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}