import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import axios from "axios"
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
const [search,setSearch] = useState("")
const [debounceValue , setDebounceValue] = useState("") 

useEffect(()=>{
  const timer = setTimeout(()=>{
    setDebounceValue(search)
  },500)

  return ()=>clearTimeout(timer)
},[search])
  const fetchUser = async()=>{
    try {
      console.log("API HIT");
        const response = await axios.get(`https://dummyjson.com/users/search?q=${debounceValue}`);
        console.log(response , "response")
        setUser(response.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[debounceValue])


  const filterUser = user.filter((item)=> item.firstName.toLowerCase().includes(search.toLowerCase()) )
  return (
    <>
      <h1>USer List</h1>

      <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {user.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {/* {filterUser.map((user)=>(
        <div key={user.id}>
          <h3>{user.firstName}</h3>
        </div>
      ))} */}
    </>
  );
}

export default App;
