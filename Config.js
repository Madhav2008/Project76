import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDXp2rCJryk2fL2qS5uhaKNV27diH9WRws",
  authDomain: "barter-system-app-c36ee.firebaseapp.com",
  projectId: "barter-system-app-c36ee",
  storageBucket: "barter-system-app-c36ee.appspot.com",
  messagingSenderId: "1042178822208",
  appId: "1:1042178822208:web:f06616589a4ac29fd90fa5"
};
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();