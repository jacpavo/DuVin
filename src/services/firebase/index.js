import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBJSJCa2ew55SgX8lPAI8WqZq6gaiwS-dA",
  authDomain: "ecommerce-duvin.firebaseapp.com",
  projectId: "ecommerce-duvin",
  storageBucket: "ecommerce-duvin.appspot.com",
  messagingSenderId: "490114376658",
  appId: "1:490114376658:web:86f449b75282ac5a3e5e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)