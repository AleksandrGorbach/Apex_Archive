import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header className="bg-pallette-backgroundLight w-full h-full">
            <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
            {props.children}
            <Footer />
        </header>
    );
}
