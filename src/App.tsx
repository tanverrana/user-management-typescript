import React from 'react';
import logo from './logo.svg';
import './App.css';




let student: string = "tammim";
let age: number = 5;
let isSmart: boolean = true;

let students: String[] = ["tnaver", "Rana"];

const person: { name: string, job: string, age: number } = {
  name: "Tanver",
  job: "jobless",
  age: 85
}

interface person1 {
  name: string,
  job: string,
  age: number
}
const person: person1 = {
  name: "tanver",
  job: "jobless",
  age: 21
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
