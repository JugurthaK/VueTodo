import firebase from 'firebase/app';
import 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNUJgsfBprLxVUFbnBpS3niqPQv8NKQL4",
    authDomain: "todo-jugurtha.firebaseapp.com",
    databaseURL: "https://todo-jugurtha.firebaseio.com",
    projectId: "todo-jugurtha",
    storageBucket: "todo-jugurtha.appspot.com",
    messagingSenderId: "25279022797"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  export default db;