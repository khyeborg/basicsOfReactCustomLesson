import logo from './logo.svg';
import './App.css';
import { Student } from "./util";

import { useState } from "react";

let Jayden = new Student("Jayden Smith", 16);

function ButtonContainer(props) {

  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setCount(count + 1);
    alert('You clicked the button! ' + count + " times");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h1>{Jayden.name}</h1>
      <h1>{Jayden.age}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ButtonContainer name="Jayden" />
    </div>
  );
}

export default App;
