import fetch from "node-fetch";
import { writeBatch, doc, getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const readonly = true;

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


const batch = writeBatch(db);
let products;
const response = await fetch('https://fakestoreapi.com/products');
products = await response.json();

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