import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'


function App() {

  return (
    // <h1>hello</h1>
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
   )
}

export default App;
