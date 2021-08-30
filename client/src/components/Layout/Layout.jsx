import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header>
            <h1>Apex Archive</h1>
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
        </header>
    );
}
