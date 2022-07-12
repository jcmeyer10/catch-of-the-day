import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhZD89OjtwvpRJWL7Vm8WvJFtcPxb3flU",
  authDomain: "catch-f7128.firebaseapp.com",
  projectId: "catch-f7128",
  storageBucket: "catch-f7128.appspot.com",
  messagingSenderId: "34710868056",
  appId: "1:34710868056:web:db714595814925eac1ba2d",
  measurementId: "G-V9GQ0FQ6NS" 
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

// this is a default export

export default base;