import React from 'react'
import  New from './New1'

function App() {
  const name = "Evaluated expression";
  return (
    
    <>    
    <New/>
    <h1>Hello there this is new line of code.</h1>
    <h3>{name}.</h3>
    </>
    // This is a fragment
  );
}

export default App
