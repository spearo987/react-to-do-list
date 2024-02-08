export function Button({value, handleClick}) {
  return <button onClick={handleClick}> 
    {value}
  </button>
}