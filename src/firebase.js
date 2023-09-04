// import firebase from "firebase/app"

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

// --------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWQtF6aOaRyNwk2VigiFdScQDofRcbvJk",
  authDomain: "disney-plus-clone-15c4f.firebaseapp.com",
  projectId: "disney-plus-clone-15c4f",
  storageBucket: "disney-plus-clone-15c4f.appspot.com",
  messagingSenderId: "585556420107",
  appId: "1:585556420107:web:27baec9eb96d0c83fbc90e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { auth, provider };
export default db;