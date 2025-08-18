// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                username,
                password,
            });

            const { token } = response.data;
            console.log('Login successful, token:', token);

            // Store username and token in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);

            // Redirect to home page
            navigate('/'); // Redirect to home page
        } catch (err) {
            console.error('Login failed:', err);
            setError('Invalid username or password'); // Set error message
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-lg font-semibold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                    Login
                </button>
                <p className="mt-4 text-sm">
                    <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                </p>
                <p className="mt-2 text-sm">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;