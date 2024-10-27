// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk0Vica-OuHgdoLbhqpn5LwtJ0AZ9q4iI",
  authDomain: "game-73b36.firebaseapp.com",
  projectId: "game-73b36",
  storageBucket: "game-73b36.appspot.com",
  messagingSenderId: "458832440202",
  appId: "1:458832440202:web:4386c826413a9e6896b673",
  measurementId: "G-JJ7ZP5R7NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
