// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcTz4Ice-nO3bQcePwXo4BEFN6pkOn6sM",
    authDomain: "music-camp-86339.firebaseapp.com",
    projectId: "music-camp-86339",
    storageBucket: "music-camp-86339.appspot.com",
    messagingSenderId: "107571423517",
    appId: "1:107571423517:web:52ef865b5e00882c4e19f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;