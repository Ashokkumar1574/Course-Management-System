import React from "react"
import './User.css'
import { useEffect,useState } from "react"
import axios from "axios"
import { useAuth } from "./Auth"
// import React from 'react'

const User = () => {
    const [post,setPost] = useState([])
    const auth=useAuth
  useEffect(()=>{ 
    axios.get("http://localhost:3001/users")
    .then(res=>setPost(res.data))
    .catch(err=>console.log(err))
  })

  return (
    <div>
      { <div class="logout">
        <h3>Welcome-{User.name}</h3>
        <button onClick={auth.Logout}>Logout</button>
      </div> }
      <div class="table">
      <h1>Users-List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
           
          </tr>
        </thead>
        <tbody>
          {post.map(User => (
            <tr key={User.name}>
              <td>{User.id}</td>
              <td>{User.username}</td>
              <td>{User.email}</td>
              <td>{User.mobileno}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
 }

 export default User;