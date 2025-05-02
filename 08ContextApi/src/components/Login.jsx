import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";


//  this is for sending data to the context api
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
        // if(username && password){
        //     setUser({username, password});
        //     setUsername("");
        //     setPassword("");
        // }else{
        //     alert("Please fill in all fields");
        // }
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username" />
                {" "}
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;