import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAK4nY-nrAP-ItQtMmO7p4fvUx-i28u5gg",
  authDomain: "like-dislike-f7463.firebaseapp.com",
  databaseURL: "https://like-dislike-f7463-default-rtdb.firebaseio.com",
  projectId: "like-dislike-f7463",
  storageBucket: "like-dislike-f7463.appspot.com",
  messagingSenderId: "369703620118",
  appId: "1:369703620118:web:1a5e733a8fb72525a9af37"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

