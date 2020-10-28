import firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCoqW-vYYaXd0uoM4izKKwT3jmLeSxQMAY",
    authDomain: "storyhub-a507c.firebaseapp.com",
    databaseURL: "https://storyhub-a507c.firebaseio.com",
    projectId: "storyhub-a507c",
    storageBucket: "storyhub-a507c.appspot.com",
    messagingSenderId: "892919547981",
    appId: "1:892919547981:web:0e7bc08ad8a70252d77404"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
