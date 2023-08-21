// Import the functions you need from the SDKs you need
import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
@Injectable({
    providedIn: 'root'
})
const firebaseConfig = {
  apiKey: "AIzaSyARDAIqdDSdQRmcG4f0v6eNngN-6q3sjuQ",
  authDomain: "lms-project-9b0da.firebaseapp.com",
  projectId: "lms-project-9b0da",
  storageBucket: "lms-project-9b0da.appspot.com",
  messagingSenderId: "860414322925",
  appId: "1:860414322925:web:ad85546ebff68d2023c4e4",
  databaseURL: "https://lms-project-9b0da-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
