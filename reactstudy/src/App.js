import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [title, setTitle] = useState("권은지");

  function change() {
    const newTitle = title === "권은지" ? "리액트 스터디 화이팅!" : "권은지";
    console.log(title);
    //document.getElementById("name").innerText = name;
    setTitle(newTitle);
  }

  return (
    <div className="App">
      <h1 id="title">{title}</h1>
      <button onClick={change}>타이틀 바꾸기</button>
    </div>
  );
}

export default App;