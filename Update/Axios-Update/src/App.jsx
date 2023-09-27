import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

var id = 11;
function App() {
const [users,setUsers] = useState([]);
const [name,setName] = useState("");
const [trigger,setTrigger] = useState(false);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res=>setUsers(res.data))
},[])
const updateUser = ()=>{
  axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{name:name})
  .then (res=>setUsers(res.data))
  .then (() =>setTrigger(!trigger))
 
}
  return (
   <>
      {users.name}
  
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={updateUser}>Update</button>
  </>
  )
  
  
}

export default App

// DEPLOY_URL:
// https://6513c33623f2b85d3927724a--dazzling-hummingbird-8daa65.netlify.app/
