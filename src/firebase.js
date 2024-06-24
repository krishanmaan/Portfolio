import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDQlf1PPgxt-V9tq_nZVT1zifCRXB-7iag",
  authDomain: "my-portfolio-1450c.firebaseapp.com",
  projectId: "my-portfolio-1450c",
  storageBucket: "my-portfolio-1450c.appspot.com",
  messagingSenderId: "609705433470",
  appId: "1:609705433470:web:3fe5ba4031414ddd7ebb2f",
  measurementId: "G-PK0EXZ5YNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB};