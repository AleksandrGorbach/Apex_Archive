import { useState } from 'react';

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
            <h3>Register</h3>
            <label>
                First Name:
                <input
                    type='text'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type='text'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Username:
                <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button>Submit</button>
        </form>
    );
}