import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleauthprovider } from '../../Auth';
import './Auth.css';

const Auth = () => {
    const handlelogin = async () => {
        try {
            let user = await signInWithPopup(auth, googleauthprovider);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Sign in with Google<br />in React</h2>
                <button onClick={() => handlelogin()} className="google-btn">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="G" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Auth;
