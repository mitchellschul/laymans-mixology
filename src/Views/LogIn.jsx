import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();

    const handleLogIn = async (e) => {
        e.preventDefault();
        console.log('Sign Up')
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const data = {}
        data['username'] = email
        data['password'] = password
        const response = await axios.post('http://127.0.0.1:8000/api/logIn/', data);
        console.log(response)
        nav('/');

    }
    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4 font-semibold text-gray-800">Log Into Your Account</h2>
                <form onSubmit={handleLogIn}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Log In
                    </button>
                </form>
                <div className='py-2'>Don't have an account? Sign Up</div>
            </div>

        </div>
    )
}

export default LogIn