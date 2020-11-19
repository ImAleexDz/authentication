import React, { useState } from 'react'
import { loginUser } from '../lib/auth'

const LoginForm = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleChange = event => {
        setState({ 
            ...state,
            [event.target.name]: event.target.value })
    };

    const handleSubmit = event => {
        const {email, password} = state
        event.preventDefault();
        loginUser(email, password)
    }

    const {email, password} = state;

        return (
            <form onSubmit={handleSubmit}>
            <div><input type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
            /></div>
            <div><input type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleChange}
            /></div>
            <button type="submit">Submit</button>
        </form>
        )
}

export default LoginForm
