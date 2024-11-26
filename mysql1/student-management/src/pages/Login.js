import React, { useContext } from 'react'; 
import { AuthContext } from '../context/AuthContext'; 

const Login = () => { 
    const { isAuthenticated, login, logout } = useContext(AuthContext); 

    const handleLogin = () => { 
        login(); 
    }; 

    const handleLogout = () => { 
        logout(); 
    }; 

    return ( 
        <div> 
            <h1>{isAuthenticated ? "Welcome back!" : "Login Page"}</h1> 
            {isAuthenticated ? ( 
                <button onClick={handleLogout}>Logout</button> 
            ) : ( 
                <button onClick={handleLogin}>Login</button> 
            )} 
        </div> 
    ); 
}; 

export default Login;