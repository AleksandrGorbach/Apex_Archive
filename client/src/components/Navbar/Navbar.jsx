import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(props) {
const { currentUser, handleLogout } = props;

const upperCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}
    return (
    <div className=''>
      <nav className='navbar'>
          <label className='navbar-toggle' id='js-navbar-toggle' for='chkToggle'>
          </label>
          <a href='#' className='logo'></a>
          <input type='checkbox' id='chkToggle'></input>
            <Link className='nav-links' to='/articles'>Apex Archive</Link>
        <Link to='/articles/new' className='nav-links'>New Post</Link>
      {currentUser ? (
        <div className='nav-links'>
          <Link to={`/profile/${currentUser.username}`} className=""><p className="hello">Hi, {upperCase(currentUser.username)}</p></Link>
          <button className="nav-links" onClick={handleLogout}>Logout</button>
        </div>
        ) : (
            <div className="nav-links">
              <Link to='/login'>Login/Register</Link>
            </div>
        )}
        {currentUser && (
          <div>
            <Link to='/articles/new' className="nav-links" >Create Article</Link>
          </div>
        )}
          </nav>
          {props.children}
    </div>
    )}
