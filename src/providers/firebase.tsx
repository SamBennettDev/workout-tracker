// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCAEYRQvBKsZ0kUfDGqI2GHJForvWjPcwg",
  authDomain: "gains-tracker-55dc4.firebaseapp.com",
  projectId: "gains-tracker-55dc4",
  storageBucket: "gains-tracker-55dc4.appspot.com",
  messagingSenderId: "989956774442",
  appId: "1:989956774442:web:cf6b3c58354f58abe40153",
  measurementId: "G-Z4JH3P6530",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
