import firebase from '../package.json'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCnURmcimj3cgdrtYN5TYjzkc7VN4oLkAY",
    authDomain: "simplereactapp-227ba.firebaseapp.com",
    projectId: "simplereactapp-227ba",
    storageBucket: "simplereactapp-227ba.appspot.com",
    messagingSenderId: "406329515487",
    appId: "1:406329515487:web:c29c760c28ab5b296db86a",
    measurementId: "G-K6VP57P7PL"
  };
  
  // Initialize Firebase
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;