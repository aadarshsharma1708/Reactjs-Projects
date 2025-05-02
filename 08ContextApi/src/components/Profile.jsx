import React, { useContext } from "react";
import UserContext from "../context/UserContext";

//this is getting data from the context api
// this is the consumer component
function Profile() {
    const { user } = useContext(UserContext);
    if (!user) {
        return <div>Please login!!</div>
    }
    return <div>Welcome {user.username}</div>
}

export default Profile;