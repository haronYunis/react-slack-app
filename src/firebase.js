import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDPTb3o-OaZdTsF8CYykSlXnfylfIG2JDE",
    authDomain: "react-slack-app-30a09.firebaseapp.com",
    databaseURL: "https://react-slack-app-30a09.firebaseio.com",
    projectId: "react-slack-app-30a09",
    storageBucket: "react-slack-app-30a09.appspot.com",
    messagingSenderId: "124284895116",
    appId: "1:124284895116:web:8eaf19d0500806a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;