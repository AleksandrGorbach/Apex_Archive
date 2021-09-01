import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
const { currentUser, handleLogout } = props;

const upperCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}
    return (
          <div className='z-10 bg-palette-darkCard shadow-lg'>
      <nav className='flex xl:flex-row xl:justify-evenly xl:flex-nowrap sm:align-baseline'>
        <Link className='mr-1 text-palette-font text-2xl' to='/articles'>Apex Archive</Link>
        <Link to='/articles/new' className='ml-1 text-palette-font'>New Post</Link>
      {currentUser ? (
        <div className='flex text-palette-font'>
          <Link to={`/profile/${currentUser.username}`} className="mr-5 "><p className="mr-1">Hi, {upperCase(currentUser.username)}</p></Link>
          <button className="border ml-6" onClick={handleLogout}>Logout</button>
        </div>
        ) : (
            <div className="mr-1">
              <Link to='/login'>Login/Register</Link>
            </div>
        )}
        {currentUser && (
          <div>
            <Link to='/articles/new' className="ml-1 text-palette-font" >Create Article</Link>
          </div>
        )}
          </nav>
          {props.children}
    </div>
    )}

