import firebase from 'firebase/compat';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDrQjBCA7MLMeWNYxfzs21rHbvc4vpJE9M',
  authDomain: 'weather-4144e.firebaseapp.com',
  projectId: 'weather-4144e',
  storageBucket: 'weather-4144e.appspot.com',
  messagingSenderId: '405200170647',
  appId: '1:405200170647:web:1d361891757f83affa03d2',
  measurementId: 'G-ZBKMQGWGDP',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// const db = app.firestore();
const auth = firebase.auth();

export {auth};
