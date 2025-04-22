import React, { useState } from 'react';
import { loginUser } from '../../services/authService';
import { useAuth } from '../../Context/AuthProvider';

const Login = () => {
    const [username, setUsername] = useState('testuser');
    const [password, setPassword] = useState('securepassword');
    const { login } = useAuth(); // AuthContext

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = await loginUser(username, password);
            console.log(token);
            localStorage.setItem('authToken', token);
            login(token);
            window.location.href = '/account';
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
