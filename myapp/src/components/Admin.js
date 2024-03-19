import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Admin.css';

export default function Admin() {
  const [post,setPost] = useState([])
  const [id,setid] = useState('')
  const [name,setname] = useState('')
  const [mobileno,setmobileno] = useState('')
  const [course,setCOURSE] = useState('')
  const [image,setImage] = useState('')

  const handleCreate = (e)=>{
    axios.post("http://localhost:3001/POST",{
      "id":id,
      "name":name,
      "mobileno":mobileno,
      "course":course,
      "image":image
    })
    .then(res => {
      console.log(res);
      setPost([...post, {
        "id": id,
        "name": name,
        "phoneno": mobileno,
        "course": course,
        "image": image
      }]);
    })
    .catch(err => console.log(err))
  }


  useEffect(()=>{
    axios.get("http://localhost:3001/POST")
    .then(res=>setPost(res.data))
    .catch(err=>console.log(err))
  },[]);

  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/POST/${id}`)
    .then(res => {
      console.log(res);
      setPost(post.filter(item => item.id !== id));
    })
    .catch(err => console.log(err))
  }

  const [popup,setPopup] = useState(false)
  const [ID1,setID1] = useState('')
  const [NAME1,setNAME1] = useState('')
  const [PHONENO1,SetPHONENO1] = useState('')
  const [course1,Setcourse1] = useState('')
  const [image1,setImage1] = useState('')

  const openPopup = (x)=>{
    setPopup(true)
    setID1(x.id)
    setNAME1(x.name)
    SetPHONENO1(x.mobileno)
    Setcourse1(x.COURSE)
    setImage1(x.image)
  }


  const handleUpdate = (id1)=>{
    axios.put(`http://localhost:3001/POST/${id1}`,{
      "ID":ID1,
      "NAME":name,
      "PHONENO":mobileno,
      "COURSE":course1,
      "image":image1
    })
    .then(res=>alert("Update"))
    .catch(err=>console.log(err))
  }

  return (
    <div className='AdminPage'>
    <div className='Container'>
      <form onSubmit={handleCreate}>
        <h2>ADD COURSE</h2>

        <div className='input-box'>
          
          <input type='text' value={id} onChange={(e)=>{setid(e.target.value)}} required/>
          <span>ID</span>
        </div>
       
        <div className='input-box'>
        
          <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}} required/>
          <span>NAME</span>
        </div>
        
        <div className='input-box'>
        
          <input type='text' value={mobileno} onChange={(e)=>{setmobileno(e.target.value)}} required/>
          <span>PHONENO</span>
        </div>
        
        <div className='input-box'>
        
          <input type='text' value={course} onChange={(e)=>{setCOURSE(e.target.value)}} required/>
          <span>COURSE</span>
        </div>

        <div className='input-box'>
          <button type='submit'>NEXT</button>
        </div>
      </form>
      </div> 
      <section>
      <div className='table-container'>
        <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PHONENO</th>
                  <th>COURSE</th>
                 
              </tr>
          </thead>
          <tbody>
              {post.map(x=>(
                  <tr key={x.course}>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.mobileno}</td>
                      <td>{x.course}</td>
                      <td>
                        <div className='btns'>
                          <button onClick={()=>openPopup(x)}>Update</button>
                          <button onClick={()=>handleDelete(x.id)}>Delete</button>
                        </div>
                      </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
      </section>
      <br />
    
    {popup && 
      <div className='popup'>
        <form onSubmit={handleUpdate}>
          <h2>UPDATE POST</h2>

          <div className='input-box'>
            <input type='text' value={ID1} required/>
            <span>ID</span>
          </div>

          
          <div className='input-box'>
            <input type='text' value={NAME1} onChange={(e)=>{setNAME1(e.target.value)}} required/>
            <span>NAME</span>
          </div>
          
          <div className='input-box'>
            <input type='text' value={PHONENO1} onChange={(e)=>{SetPHONENO1(e.target.value)}} required/>
            <span>PHONENO</span>
          </div>

              
        <div className='input-box'>
          <input type='text' value={course1} onChange={(e)=>{Setcourse1(e.target.value)}} required/>
          <span>COURSE</span>
        </div>

          <div className='input-box'>
            <input type='text' value={image1} onChange={(e)=>{setImage1(e.target.value)}} required/>
            <span>Image Link</span>
          </div>

          <div className='input-box btns'>
            <button onClick={()=>setPopup(false)}>Close</button>
            <button type='submit'>Update</button>
          </div>
        </form>
      </div>
      }
    </div>
  )
    }
