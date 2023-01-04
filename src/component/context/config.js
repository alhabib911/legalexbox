import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCy6Dwgqs-aL7lxtkj8YUXZRt11nF5tEKk",
    authDomain: "legalex-box.firebaseapp.com",
    projectId: "legalex-box",
    storageBucket: "legalex-box.appspot.com",
    messagingSenderId: "282959751902",
    appId: "1:282959751902:web:94ce807e4a58300133b04f"
  };

export const fbApp = initializeApp(firebaseConfig);
export const fbAuth = getAuth(fbApp);
