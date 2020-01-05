import * as firebase from "firebase/app";
import config from "./config.json";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
};

const Firebase = firebase.initializeApp(firebaseConfig);

const firestore = Firebase.firestore();
const auth = Firebase.auth();
export { firestore, auth, Firebase };
