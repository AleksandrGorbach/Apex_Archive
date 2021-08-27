import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
    const [fromData, setFormData] = useState({
        username: '';
        password: '';
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
        ></form>
    )
}