// SignInForm.js
import React, { useState } from 'react';

const SignInForm = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Example: Validate inputs (you should add more robust validation)
        if (name && email && password) {
            // Example: Save user data (you might want to send it to a server)
            const userData = { name, email, password };
            console.log('User data:', userData);

            // Example: Redirect to home page or perform other actions
            history.push('/'); // Redirect to home page
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInForm;
