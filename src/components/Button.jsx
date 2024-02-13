export function Button({label, handleClick, disabled}) {
  return <button onClick={handleClick} disabled={!disabled}> 
    {label}
  </button>
}