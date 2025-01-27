import React from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, doc, setDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD13v5itYnP5_np7_2yFo8UFLOLLDjlEdE",
  authDomain: "chat-1-1b775.firebaseapp.com",
  projectId: "chat-1-1b775",
  storageBucket: "chat-1-1b775.appspot.com",
  messagingSenderId: "158664584430",
  appId: "1:158664584430:web:8307cb0f545545fc2d17ff",
  measurementId: "G-RBD34ZPNHR"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);


function SignIn() {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    };
  
    const signInWithEmail = () => {
      // Handle email sign-in logic here
    };
  
    const signInWithApple = () => {
      // Handle Apple sign-in logic here
    };
  
    return (
        <>
          <div className="blob-sec">
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
      
          <div className="signup">
            <div className="text">
              <div>
                <span>Mind.</span>
                <span>Find.</span>
                <div className="switcher">
                  <div className="s-items">
                    <span>Explore.</span>
                    <span>chat.</span>
                    <span>Create.</span>
                    <span>Explore.</span>
                    <span>chat.</span>
                    <span>Create.</span>
                  </div>
                </div>
                <span className="s">with friends and more.</span>
              </div>
            </div>
            <div className="buttons">
              <div onClick={signInWithGoogle}>
                <img src="unnamed.png" alt="" />
                <span>Continue with Google</span>
              </div>
              <div className="apple" onClick={signInWithApple}>
                <img src="apple.png" alt="" />
                <span>Continue with Apple</span>
              </div>
              <div className="email" onClick={signInWithEmail}>
                <span>Continue with email</span>
              </div>
            </div>
          </div>
        </>
      );
  }
  

export { SignIn };

