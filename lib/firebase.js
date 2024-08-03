import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLkcdCpOJChN_ZXAccMiqV3RYcyqiwUno",
    authDomain: "thebawman-9e4e8.firebaseapp.com",
    projectId: "thebawman-9e4e8",
    storageBucket: "thebawman-9e4e8.appspot.com",
    messagingSenderId: "444756138084",
    appId: "1:444756138084:web:5685050ecae99599572771"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();