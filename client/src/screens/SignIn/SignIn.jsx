import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const { handleLogin } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form
                        onSubmit={(e) => {
                e.preventDefault();
                handleLogin(formData);
            }}
           >
            {/* <div className="login-container"> */}
            <section className="login">
            <header>
            <h2>Apex Archive</h2>
            <h4>Login</h4>
            </header>
            <div className="login-form"
>   
                <input className="login-input"
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                    // required autofocus
                />
            <br />
                <input className="login-input"
                name='password'
                type='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                />
            <br />
            <Link to='/register'>Don't have an account? Sign Up!</Link>
            <button className="login-button">SIGN IN</button>
            </div>
            </section>
            {/* </div> */}
        </form>
    );
}