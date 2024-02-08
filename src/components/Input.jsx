export function Input ({placeholder, value, onChange}) {
  return <input 
      type="text" 
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.target.value)} 
      placeholder={placeholder}/>
}