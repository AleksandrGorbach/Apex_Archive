import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
const { currentUser, handleLogout } = props;

    return (
        <div>
            <Link to='/articles'><h1>Apex Archive</h1></Link>
            <Link to='/articles/new'><h1>New Post</h1></Link>
            {currentUser ? (
                <div>
                    <p>{currentUser.username}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to='/login'>Login/Register</Link>
            )}
            <hr />
            {currentUser && (
                <div>
                    <Link to='/articles'>Articles</Link>
                    <Link to='/articles/new'>Post Article</Link>
                </div>
            )}
            {props.children}
        </div>
    )
}
