import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header>
            {/* <Navbar /> */}
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
            <Footer />
        </header>
    );
}
