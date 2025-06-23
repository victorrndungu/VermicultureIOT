// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoosWAz64CILHuBPOrNq0kjcvfimRvMPM",
  authDomain: "vermicultureiot.firebaseapp.com",
  databaseURL: "https://vermicultureiot-default-rtdb.firebaseio.com",
  projectId: "vermicultureiot",
  storageBucket: "vermicultureiot.firebasestorage.app",
  messagingSenderId: "48951942012",
  appId: "1:48951942012:web:3f08f0baf4d7bfbbfbe2f9",
  measurementId: "G-VN28Z8653L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);