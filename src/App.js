import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from 'react';

function MainApp() {

  return (
    <section>
      <h1>To-do list</h1>
      <List />
    </section>
  );
}

function List() {

  const [listItems, setListItems] = useState(["To-do Item 1", "To-do Item 2", "To-do Item 3"])
  const [item, setItem] = useState(null);

  function handleClick(){
    if(item !== '')
      setListItems([...listItems, item])
      document.querySelector('input[type=text]').value = '';
  }
  
  return (
    <>
      <ul>
        {listItems.map((el) => (
          <ListItem label={el} />
        ))}
      </ul>
      <input type="text" onChange={() => setItem(document.querySelector('input[type=text]').value)}></input>
      <button onClick={handleClick}>Add item</button>
  </>)
}

function ListItem({ label, addItem }) {
  const [checked, setChecked] = useState('');

  function handleClick() {
    if (checked) {
      setChecked(false);
      console.log('List-item unchecked');
    } else {
      setChecked(true);
      console.log('List-item checked');
    }
  }

  return (
    <li>
      <input
        id={label}
        type="checkbox"
        defaultChecked={checked}
        onClick={handleClick}
      ></input>
      <label htmlFor={label}>{label}</label>
    </li>
  );
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
