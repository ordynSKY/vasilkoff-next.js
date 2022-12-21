// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ZFiDMuD6g7kaMwksJEXgOKzKUbktBpI",
    authDomain: "vasilkoff-test.firebaseapp.com",
    projectId: "vasilkoff-test",
    storageBucket: "vasilkoff-test.appspot.com",
    messagingSenderId: "774858669905",
    appId: "1:774858669905:web:9658303f6661e8b20c1d70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// console.log("Api key", firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app);
