import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { googleSignIn, setUser, setError, setIsLoading } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const url = location?.state?.from || '/'

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
                history.push(url)
                setIsLoading(false)

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google sign In</button>
        </div>
    );
};

export default Login;