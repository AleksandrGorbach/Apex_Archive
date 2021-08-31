import { useState } from 'react';
import './SignUp.css';

export default function Register(props) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email:  '',
        password: '',
    });
    const { handleRegister } = props;

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
                handleRegister(formData);
            }}
        >   
            <section className="register">
            <header>
            <h2>Apex Archive</h2>
            <h4>Register</h4>
            </header>
                <input
                    type='text'
                    name='firstname'
                    placeholder='First Name'
                    value={formData.firstname}
                    onChange={handleChange}
                />
            <br />
                <input
                    type='text'
                    name='lastname'
                    placeholder='Last Name'
                    value={formData.lastname}
                    onChange={handleChange}
                />
            <br />
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                />
            <br />
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
            <br />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
            <br />
            <button className='register-button'>SIGN UP</button>
            </section>
        </form>
    );
}