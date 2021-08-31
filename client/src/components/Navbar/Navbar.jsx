import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components';
// import About from '../Modal-About/Modal-About';
// import { signOut } from '../../services/users';
// import SignIn from '../../screens/SignIn/SignIn';
// import SignIn from '../../views/SignIn/SignIn';
// import './Navbar.css'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {currentUser, handleLogout} = props;

    const upperCase = (str) => {
      return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
//     }
//     return (
//         <header>
//             <Navbar />
//             <h1>Apex Archive</h1>
//             {currentUser ? (
//                 <div>
//                     <p>{currentUser.username}</p>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : (
//                 <Link to='/login'>Login/Register</Link>
//             )}
//             <hr />
//             {currentUser && (
//                 <div>
//                     <Link to='/articles'>Articles</Link>
//                     <Link to='/articles/new'>Post Article</Link>
//                 </div>
//             )}
//             {props.children}
//         </header>
//     );
// };

const Nav = styled.div`
    width: 100vw;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-image: linear-gradient(to top, #eecda3, #ef629f);
    position: relative;
    z-index: 20;
    opacity: 0.8;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span{
        height: 2px;
        width: 25px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px){
        display: flex;
    }
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    font-weight: bold;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`
const Logo = styled.a`
    padding: 1rem 0;
    color: white;
    text-decoration: none;
    font-weight: 800;    
    font-size: 1.7rem;
    opacity: 0.9;
    span{
        font-weight: 300;
        font-size: 1.3rem;
    }
`

export default Navbar;