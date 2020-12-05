import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD2CqI6EAb2fjflmUlWH0oEJRIwWQnvfhk",
  authDomain: "auth-firebase-708af.firebaseapp.com",
  databaseURL: "https://auth-firebase-708af.firebaseio.com",
  projectId: "auth-firebase-708af",
  storageBucket: "auth-firebase-708af.appspot.com",
  messagingSenderId: "822988036076",
  appId: "1:822988036076:web:85fcc15572d00b885d12c9"
});

export const auth = app.auth();
export default app;