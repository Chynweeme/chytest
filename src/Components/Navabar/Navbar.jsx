import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar flex w-full p-5 shadow '>
      <div className="heading ml-2">9ijakids</div>
      <ul className="menu-items hidden lg:flex w-2/4">
        <li><a href="#" className='active bg-red'>Sign Up</a></li>
        <li><a href="#">Log In</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="hamburger block lg:hidden text-white underline">Menu</div>
      <div className="sidepanel block lg:hidden w-1/2 flex">
        <div className='hidden'>
          <ul className='py-3 px-10 border'><a href="#">Home</a></ul>
          <ul className='py-3 px-10 border'><a href="#">About</a></ul>
          <ul className='py-3 px-10 border'><a href="#">Projects</a></ul>
          <ul className='py-3 px-10 border'><a href="#">Contact</a></ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
