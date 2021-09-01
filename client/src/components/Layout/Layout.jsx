import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ImageSlider from '../ImageSlider/ImageSlider';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header className="w-full h-full">
            <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
            <ImageSlider />
            {props.children}
            <Footer />
        </header>
    );
}
