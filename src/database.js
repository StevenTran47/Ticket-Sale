import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCKAK2Q92t5QoLshudypsHoYH4PgNDqqhA",
    authDomain: "react-demo-ff682.firebaseapp.com",
    databaseURL: "https://react-demo-ff682-default-rtdb.firebaseio.com",
    projectId: "react-demo-ff682",
    storageBucket: "react-demo-ff682.appspot.com",
    messagingSenderId: "1003278896926",
    appId: "1:1003278896926:web:f242d71ac900017480830f",
    measurementId: "G-WF6ZBFCN1Z"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;