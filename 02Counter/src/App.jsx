import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
  const addValue =()=>{
    console.log("Value added :",counter);

    setCounter(counter+1);
    console.log("After setCount added :",counter);  // This will re-render the component and update the UI
    if(counter >= 10){
      alert("Counter value can not be more than 10");
      return;
    }
     
  }
  // ----old way to update the state
  //let counter = 25;
  // const addValue =()=>{
  //   counter = counter + 1;
  //   console.log("Value added :",counter);  // but still This will not re-render the component and not update the UI

  // }

  const removeValue =()=>{
    
    counter = counter - 1;
    setCounter(counter);
    if(counter+1 <= 0){
      alert("Counter value can not be less than 0");
      return;
    }
  }


  return (
    <>
      <h1>Welcome to the new project!</h1>
      <h2>Use of Hooks in React</h2>
      <h3>Counter value : {counter}</h3>

      <button
      onClick={addValue}> Add value</button>
      <br/>
      <button onClick = {removeValue}> Remove value</button>

      <p>Disclaimer : Counter Value should be non- negative and less than or equal to 10.</p>

    </>
  )
}

export default App
