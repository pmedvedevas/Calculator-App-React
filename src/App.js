import React, {useState} from "react";
import './App.css';
//Importing array of keypad buttons
import { buttons } from "./components/Buttons";
//Importing components
import DisplayArea from "./components/DisplayArea";
import Keypad from "./components/Keypad";

function App() {
  const [inputValue, setInputValue] = useState([]);
  const [showResult, setShowResult] = useState(false)

  return (
    <div className="container">
      <DisplayArea inputValue={inputValue} showResult={showResult} />
      <Keypad arrayOfButtons={buttons} setInputValue={setInputValue} setShowResult={setShowResult}/>
    </div>
  )
}

export default App;
