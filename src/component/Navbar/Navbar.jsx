import React from 'react'
import Logo from "../../assets/img/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
<nav>
    <img src={Logo}  />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Content</li>
        <li>Blog</li>
        <li>Careees</li>
    </ul>
    <div className='Request_button'>
<p>Request Invite</p>
    </div>
</nav>



    </div>
  )
}

export default Navbar