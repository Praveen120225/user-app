import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-dark bg-dark">
<Link to="/" className="navabar-brand">REACT USER</Link>
<div className="ml-auto">
    <ul className="navbar-nav">
    <li className="nav-list"><Link className="nav-link" to="/Home">Home</Link></li>

    <li className="nav-list"><Link className="nav-link" to="/user">USER</Link></li>
    </ul>
</div>
   </nav>
   </>
  )
}

export default Navbar

