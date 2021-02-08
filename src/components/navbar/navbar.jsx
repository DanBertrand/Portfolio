import React from 'react'
import './style.css'
 
const Navbar = ( { Link } ) => {
  return (
     <div className='navbar'>
         <h1>Portfolio</h1>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/works">Works</Link>
     </div>
  )
}
 
export default Navbar
 