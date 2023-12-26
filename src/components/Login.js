import { useState } from 'react';
import * as React from 'react';
import '../App.css';
import { Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link } from '@mui/material';
import { green } from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(show => !show)
    }

    // User Login info
    const database = [
        {
            username: "admin",
            password: "admin1234"
        },
        {
            username: "user",
            password: "user1234"
        }
    ];

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    const handleSubmit = (event) => {
        
        //Prevent page reload
        event.preventDefault();

        var { username, password } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                // Invalid password
                setErrorMessages({ name: "password", message: errors.password });
            } else {
                setIsSubmitted(true);
        }
        } else {
            // Username not found
            setErrorMessages({ name: "username", message: errors.username });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            {/* <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label><br />
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label><br />
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container ml-10">
                    <input type="submit" />
                </div>
            </form> */}

            <form onSubmit={handleSubmit}>
               
                <TextField
                    required
                    id="standard-required"
                    label="Username"
                    variant="standard"
                    name="username"
                    fullWidth
                    />
                    {renderErrorMessage("username")}

                    <FormControl sx={{ marginTop: 2 }} variant="standard" required fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    {renderErrorMessage("password")}

                    <FormControlLabel control={<Checkbox />} label="Remember Me" name="remember" sx={{ marginTop: 2, marginLeft: 0 }} />
                    <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>Sign In</Button> 
                    <Link href="#" underline="always">
                        {'Forgot password ?'}
                    </Link>
                    <div>Do you have an account ? <Link href="#" underline="always">
                        {'Sign up'}
                    </Link></div>
                
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <Grid align="center">
                    <Avatar sx={{ bgcolor: green[500] }}><LockOutlinedIcon /></Avatar>
                    <h1>Sign In</h1>
                </Grid>
                {isSubmitted ? <Navigate to="home" /> : renderForm}
            </div>
        </div>
    );
}

export default Login