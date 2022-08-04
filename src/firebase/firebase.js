import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAXiETGrx4xYnsIUpui10I6zbcu2P0t1Sg",
  authDomain: "react-tp-e-commerce.firebaseapp.com",
  projectId: "react-tp-e-commerce",
  storageBucket: "react-tp-e-commerce.appspot.com",
  messagingSenderId: "907381526078",
  appId: "1:907381526078:web:cbe72d49f62d52f41b0b6f"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore();