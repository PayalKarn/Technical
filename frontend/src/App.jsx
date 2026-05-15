import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import axios from "axios"
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const fetchUser = async()=>{
    try {
        const response = await axios.get("https://dummyjson.com/users");
        console.log(response , "response")
        setUser(response.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <>
      <h1>USer List</h1>
      {user.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
