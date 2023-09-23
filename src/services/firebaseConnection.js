import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAhEyzRP_XJ_LPcoD5XF7lsqHxwn2W64sA",
    authDomain: "tickets-5af3f.firebaseapp.com",
    projectId: "tickets-5af3f",
    storageBucket: "tickets-5af3f.appspot.com",
    messagingSenderId: "848957855290",
    appId: "1:848957855290:web:325731cf1f8a20362dc703",
    measurementId: "G-TTVNSJXSDC"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp); 

export { auth, db, storage }; 