const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyA77-4YtlYcf6l0llKH7uIwLDoOjk7Y660",
  authDomain: "kiei-451-f3a4a.firebaseapp.com",
  projectId: "kiei-451-f3a4a",
  storageBucket: "kiei-451-f3a4a.appspot.com",
  messagingSenderId: "1058781797707",
  appId: "1:1058781797707:web:682266636687c031265cce"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase