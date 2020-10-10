import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDEx8u52fPEL_cBKHEajw3ufAeN8o9Cv0g",
    authDomain: "net-ninja-marioplan-a96d9.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-a96d9.firebaseio.com",
    projectId: "net-ninja-marioplan-a96d9",
    storageBucket: "net-ninja-marioplan-a96d9.appspot.com",
    messagingSenderId: "6786214875",
    appId: "1:6786214875:web:c1a7f698ecb31e5aed95fe",
    measurementId: "G-E20T7KSX7S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;