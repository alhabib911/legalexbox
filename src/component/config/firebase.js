// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy6Dwgqs-aL7lxtkj8YUXZRt11nF5tEKk",
  authDomain: "legalex-box.firebaseapp.com",
  projectId: "legalex-box",
  storageBucket: "legalex-box.appspot.com",
  messagingSenderId: "282959751902",
  appId: "1:282959751902:web:94ce807e4a58300133b04f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;