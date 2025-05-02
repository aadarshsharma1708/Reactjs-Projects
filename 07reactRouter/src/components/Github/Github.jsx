import React, {useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
    


    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/aadarshsharma1708")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching GitHub followers:", error);
    //         });
    // }, []);
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub Followings : {data.following}
        <img src={data.avatar_url} alt="Git Picture" width = {300} />
        </div>
    );
}

export default Github;

export const gitInfoLoader = async () => {
    const response  = await fetch("https://api.github.com/users/aadarshsharma1708")
    return response.json();
}