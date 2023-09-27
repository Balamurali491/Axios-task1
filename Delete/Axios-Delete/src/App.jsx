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
const deleteUser = ()=>{
  axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
  .then (res=>setUsers(res.data))
  .then (() =>setTrigger(!trigger))
 
}
if (!users) return "no users"
  return (
   <>
      {users.name}
  
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={deleteUser}>Delete</button>
  </>
  )
  
  
}

export default App

// DEPLOY_URL:
// https://6513c78b98d3ea5ea97f3e22--melodic-cajeta-d778ec.netlify.app/