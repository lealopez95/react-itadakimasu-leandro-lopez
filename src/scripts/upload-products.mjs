import fetch from "node-fetch";
import { writeBatch, doc, getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const readonly = false;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore();


const batch = writeBatch(db);
const response = await fetch('https://fakestoreapi.com/products');
const products = await response.json();

for(const product of products) {
    const prodRef = doc(collection(db, "products"));
    batch.set(prodRef, {
        title: product.title,
        category: product.category,
        description: product.description,
        image: product.image,
        price: parseFloat(product.price),
        stock: 5,
    });
}
if(!readonly) {
    await batch.commit();
}