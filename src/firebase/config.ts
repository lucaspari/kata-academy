import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAguCcXkSOKAhgu1FltoV8Tz55_CSanoyI",
  authDomain: "kata-acad.firebaseapp.com",
  projectId: "kata-acad",
  storageBucket: "kata-acad.appspot.com",
  messagingSenderId: "927812031720",
  appId: "1:927812031720:web:85619f49bd9252b9a0e55d",
  measurementId: "G-78DQ0E0X3D",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
