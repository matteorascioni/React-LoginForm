import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

import './LoginForm.css';

const LoginForm = ({ login }) => {
    const[details, setDetails] = useState({name: "", email: "", password: "",});

    const submitHandler = (e) => {
        e.preventDefault();

        login(details);
    }

    return (
        <form onSubmit={submitHandler} className="LoginForm">
            <h1>Log In</h1>

            <FormControl className="formControl">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={details.name}
                    onChange={e => setDetails({...details, name: e.target.value})} 
                />
            </FormControl>

            <FormControl className="formControl">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={details.email}
                    onChange={e => setDetails({...details, email: e.target.value})} 
                />
            </FormControl>

            <FormControl className="formControl">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={details.password}
                    onChange={e => setDetails({...details, password: e.target.value})} 
                />
            </FormControl>

            <Button type="submit" variant="contained" color="primary">Sign In</Button>
        </form> 
    )
}

export default LoginForm;
