import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'


const DisplayMessage = ({ message }) => {
  return message ? <p className="text-white text-sm font-thin mt-2">{message}</p> : null;
};
function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState('')
  const [message, setMessage] = useState("");

  //useRef hook
  const passwordRef = useRef(null)
  //useRef to store the password

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+-[]{};?:,.<>/~'`"
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select() // Select the input text
    passwordRef.current.setSelectionRange(0, 32) // For mobile devices
    // Copy the password to the clipboard
    window.navigator.clipboard.writeText(Password);

    setMessage("Password copied to clipboard");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [Password]);

  useEffect(() => {  // useEffect to call passwordGenerator when length, numAllowed, or charAllowed changes
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-4 text-amber-600 bg-gray-800'>
        <h1 className='text-3xl text-white text-center font-bold py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full px-3 py-1 rounded-lg border-2 border-orange-300'
            placeholder='Generate Password'
            readOnly
            ref={passwordRef} // attach the ref to the input
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg focus:bg-blue-500 hover:border-2 hover:border-orange-300'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-4'>
          <div className=' flex item-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className=' flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className=' flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
        <DisplayMessage message = {message}/>
      </div>
    </>
  )
}

export default App
