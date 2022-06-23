import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBojKwdvLJVJyM1noxPdx616pEdnEIFONk",
  authDomain: "netflix-4355e.firebaseapp.com",
  projectId: "netflix-4355e",
  storageBucket: "netflix-4355e.appspot.com",
  messagingSenderId: "691681820456",
  appId: "1:691681820456:web:8c4990c2eeef492a975a1d"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
