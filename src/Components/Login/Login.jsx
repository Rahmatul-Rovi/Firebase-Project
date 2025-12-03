import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';

const Login = () => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('Google clicked');
        signInWithPopup(auth,provider)
        .then(result => {
          console.log(result.user);
          setUser(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleGoogleSignOut = () => {
        signOut(auth).then(() =>{
            console.log('Sign Out Completed');
            setUser(null);
        }).catch(error =>
             {
                console.log(error);
            });
    }
    const handleGithubSignIn = () => {
     signInWithPopup(auth, githubProvider)
     .then(result => {
        console.log(result);
        setUser(result.user);
     })
     .catch(error => {
        console.log(error);
     })
    }
    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={handleGoogleSignOut}>Sign Out</button> */}
           {user ? (
            <button onClick={handleGoogleSignOut}>Sign Out</button>
        ) : (
            <>
                <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                <button onClick={handleGithubSignIn}>Sign In With Github</button>
            </>
        )}
           {
            user &&  <div>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
           }
        </div>
    );
};

export default Login;