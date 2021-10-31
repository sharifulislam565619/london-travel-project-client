import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import login_img from '../../../images/login_img.jpg';

const Login = () => {
    const { googleSignIn, setUser } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const url = location?.state?.from || '/'

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
                history.push(url)


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <img className="w-75" src={login_img} alt="" />
                </div>
                <div className="col-md-5 py-5  text-success">
                    <h2>Please login</h2>
                    <button className="btn btn-danger" onClick={handleGoogleSignIn}> <i className="fab fa-google"></i> Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;