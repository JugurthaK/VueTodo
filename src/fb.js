import firebase from 'firebase/app';
import 'firebase/firestore';
let auth = require('./auth')

  // Initialize Firebase
  var config = auth.config;
  firebase.initializeApp(config);
  const db = firebase.firestore();

  export default db;