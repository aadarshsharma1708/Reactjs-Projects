// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   username: "adarsh",
  //   age: 23
  // }
  // let myArray = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='bg-orange-500 text-black border-2 border-black rounded-xl p-3'>React + Tailwind CSS</h1>

      <Card username="Adarsh" btnTxt ="Visit Profile" />
      <Card username="Aman Dev" btnTxt="Click me"/>
      <Card username="Harry Potter" />
    </>

  )
}

export default App
