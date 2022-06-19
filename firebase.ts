// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKa3qn7K7SqInZ6oQ2TRADzEsrM3d4JbA",
    authDomain: "netflix-clone-yt-a96ee.firebaseapp.com",
    projectId: "netflix-clone-yt-a96ee",
    storageBucket: "netflix-clone-yt-a96ee.appspot.com",
    messagingSenderId: "1002265079479",
    appId: "1:1002265079479:web:9fde21d9eea36250c96732"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }