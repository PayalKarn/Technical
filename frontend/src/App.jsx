import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import axios from "axios"
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
const [search,setSearch] = useState("")
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


  const filterUser = user.filter((item)=> item.firstName.toLowerCase().includes(search.toLowerCase()) )
  return (
    <>
      <h1>USer List</h1>

      <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {/* {user.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <p>{user.email}</p>
        </div>
      ))} */}

      {filterUser.map((user)=>(
        <div key={user.id}>
          <h3>{user.firstName}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
