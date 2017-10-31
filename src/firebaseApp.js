import firebase from 'firebase'
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAz1b2VANVPCvADQ5ZBK5LlL5nHevvSBvM",
  authDomain: "urnout.firebaseapp.com",
  databaseURL: "https://urnout.firebaseio.com",
  projectId: "urnout",
  storageBucket: "",
  messagingSenderId: "558522123778"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
