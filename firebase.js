// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO85HA4C5Wi0YWdjM4g8rBs9kJggPgXeE",
    authDomain: "vasilkoffcom-1532682115746.firebaseapp.com",
    projectId: "vasilkoffcom-1532682115746",
    storageBucket: "vasilkoffcom-1532682115746.appspot.com",
    messagingSenderId: "984244302774",
    appId: "1:984244302774:web:32d5800f25cebf27a48717",
    measurementId: "G-4SQX3RQYV3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// console.log("Api key", firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app);
