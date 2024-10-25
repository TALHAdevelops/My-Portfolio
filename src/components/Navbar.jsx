import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState (false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
      <nav className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center border-2 border-red-400'>
  <h1 className='text-3xl font-bold primary-color ml-4'>M.Talha</h1>
  <ul className='hidden md:flex'>
  <li className='p-5 hover:text-red-500'>
    <NavLink to="/">Home</NavLink>
  </li>
    <li className='p-5 hover:text-red-500'>
      <NavLink to="/about">About</NavLink>
    </li>
    <li className='p-5 hover:text-red-500'>
      <NavLink to="/skills">Skills</NavLink>
    </li>
    <li className='p-5 hover:text-red-500'>
      <NavLink to="/projects">Projects</NavLink>
    </li>
    <li className='p-5 hover:text-red-500'>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed h-full left-0 top-0 bg-indigo-900 w-[60%] ease-in-out duration-500' : 'fixed left-[-100%]'} >
  <h1 className='text-4xl text-lime-300 primary-color m-4 '>M.Talha</h1>
  <ul className='p-8 text-4x1'>
    {/* I want to change the lank to navlink */}
    <li className='p-2 hover:text-orange-400 hover:font-bold hover:underline'><NavLink to="/">Home</NavLink></li>
    <li className='p-2 hover:text-orange-400 hover:font-bold hover:underline'><NavLink to="/about">About</NavLink></li>
    <li className='p-2 hover:text-orange-400 hover:font-bold hover:underline'><NavLink to="/skills">Skills</NavLink></li>
    <li className='p-2 hover:text-orange-400 hover:font-bold hover:underline'><NavLink to="/projects">Projects</NavLink></li>
    <li className='p-2 hover:text-orange-400 hover:font-bold hover:underline'><NavLink to="/contact">Contact</NavLink></li>
  </ul>
</div>
      </nav>
    
  )
}

export default Navbar;