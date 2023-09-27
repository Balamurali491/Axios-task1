import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

var id = 11;
function App() {
const [users,setUsers] = useState([]);
const [name,setName] = useState("");
const [trigger,setTrigger] = useState(false);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>setUsers(res.data))
},[])
const postUser = ()=>{
  axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
  .then (res=>setUsers([...users,res.data]))
  .then (() =>setTrigger(!trigger))
}
  return (
   <>
      {users.map((u,i)=>{
        return(
          <div key={i}>
            {u.name}
          </div>
        )
      })}
  
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={postUser}>Post</button>
  </>
  )
  
  
}

export default App
