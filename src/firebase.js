// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "blueskychineserestaurant.firebaseapp.com",
    projectId: "blueskychineserestaurant",
    storageBucket: "blueskychineserestaurant.firebasestorage.app",
    messagingSenderId: "559027851401",
    appId: "1:559027851401:web:c6e191699566330fe27658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMenu(db) {
    const citiesCol = collection(db, 'menu');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
export { app, db, getMenu }
