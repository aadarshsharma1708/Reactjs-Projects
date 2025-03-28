import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'


import App from './App.jsx'

function MyFunction() {
   return (
      <div>
         <h1>My Function</h1>
      </div>
   )
}
// const ReactElement = {
//    type : 'a',
//    props : {
//       href : 'http://google.com',
//       target : '_blank',
//    },
//    children : 'Click me to visit google'
// }
// const anotherelement ={
//    <a href = "https://google.com" target="_blank">Visit Google</a>
// }

const anotherUser = "this is new user";
const ReactElement = React.createElement(
   'a',
   {
      href: 'https://google.com',
      target: '_blank',
   },
   'Visit Google',
   anotherUser
)


createRoot(document.getElementById('root')).render(
   ReactElement
)
