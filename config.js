
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBpS_qRnKvTge5accNUwzgIYQ4w_lOdcpk",
  authDomain: "nodefirebase-93a44.firebaseapp.com",
  projectId: "nodefirebase-93a44",
  storageBucket: "nodefirebase-93a44.appspot.com",
  messagingSenderId: "354224354938",
  appId: "1:354224354938:web:75079ce79e494619c62dc3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;