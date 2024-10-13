import React, { useRef, useState } from 'react';


import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, doc, setDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatRoom from './App';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDN0LUrAEsqT6gqjPwhORcp924ZDngFE",
  authDomain: "chat-3-7942e.firebaseapp.com",
  projectId: "chat-3-7942e",
  storageBucket: "chat-3-7942e.appspot.com",
  messagingSenderId: "589178656779",
  appId: "1:589178656779:web:5bf03576d4fe60e9354f0e",
  measurementId: "G-146SHE01R7"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);


function ProfileForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const submitProfile = async (e) => {
      e.preventDefault();
      
      const { uid } = auth.currentUser;
  
      // Save user profile in Firestore
      await setDoc(doc(firestore, 'users', uid), {
        firstName,
        lastName,
        displayName,
        uid,
        createdAt: serverTimestamp()
      });
  
      setIsSubmitted(true);
    };
  
    return (
      <>
        <div className="app-holder stepBystep">
        {!isSubmitted ? (
          <>
            <h1>Let's get to know you!</h1>
            <form onSubmit={submitProfile}>
            <input 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="First Name" 
              required 
            />
            <input 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="Last Name" 
              required 
            />
            <input 
              value={displayName} 
              onChange={(e) => setDisplayName(e.target.value)} 
              placeholder="Display Name" 
              required 
            />
          </form>
            <button 
              type="submit" 
              className={firstName && lastName && displayName ? 'btn-1' : 'non-available btn-1'}
              disabled={!firstName || !lastName || !displayName}
                onClick={submitProfile}
            >
              Submit
            </button>
          </>
        ) : (
          <ChatRoom />
        )}
        </div>
      </>
    );
  }
  

export default ProfileForm;

// function ProfileForm() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [displayName, setDisplayName] = useState('');
//     const [isSubmitted, setIsSubmitted] = useState(false);
  
//     const submitProfile = async (e) => {
//       e.preventDefault();
      
//       const { uid } = auth.currentUser;
  
//       // Save user profile in Firestore
//       await setDoc(doc(firestore, 'users', uid), {
//         firstName,
//         lastName,
//         displayName,
//         uid,
//         createdAt: serverTimestamp()
//       });
  
//       setIsSubmitted(true);
//     };
  
//     return (
//       <>
//         {!isSubmitted ? (
//           <form onSubmit={submitProfile}>
//             <input 
//               value={firstName} 
//               onChange={(e) => setFirstName(e.target.value)} 
//               placeholder="First Name" 
//               required 
//             />
//             <input 
//               value={lastName} 
//               onChange={(e) => setLastName(e.target.value)} 
//               placeholder="Last Name" 
//               required 
//             />
//             <input 
//               value={displayName} 
//               onChange={(e) => setDisplayName(e.target.value)} 
//               placeholder="Display Name" 
//               required 
//             />
//             <button type="submit">Submit</button>
//           </form>
//         ) : (
//           <ChatRoom />
//         )}
//       </>
//     );
//   }