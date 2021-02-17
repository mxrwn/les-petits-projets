import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [name, setName] = useState("")

  const ChangeName = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="App">
      <input type="text" value={name} onChange={ChangeName}/>
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default App;
