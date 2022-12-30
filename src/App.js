import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import List from './components/List';
import Form from './components/Form';

function App() {

  const [list, setList] = useState([
    {
      nombre:"Mario Bros",
      ciudad: "Isla"

    }
  
  ])

  return (
    <div className="App d-flex p-5">
      <Form lista={list} setList={setList} />
      <List lista={list} setList={setList} />
      

    </div>
  );
}

export default App;
