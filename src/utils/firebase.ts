import * as firebase from "firebase/app";
import config from "./config.json";
import "firebase/database";
import "firebase/auth";
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

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
export { db, auth };
