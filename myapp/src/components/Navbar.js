import React from 'react'
import '../images/Logo.png'
import {NavLink} from 'react-router-dom'
import { useAuth } from './Auth'
import Admin from './Admin'

export default function Navbar() {
  const auth = useAuth()

  return (
    <div className='navBar'>
        <div className="logo">
            {/* Logo */}
        </div>
        <ul className="nav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/service'>Course</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {<NavLink to='/admin'>Admin</NavLink> }
            {auth.user==='admin' && <NavLink to='/Admin'>Admin</NavLink>}
            <NavLink to='/user'>User</NavLink>
            {!auth.user && <NavLink to='/login'>Login</NavLink>}
        </ul>
    </div>
  )
}
