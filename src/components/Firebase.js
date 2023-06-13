import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase,ref,set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxeyK4drkDBeNFqYAlRoIbhqZ1oz0d6v4",
  authDomain: "business-incubator-f3262.firebaseapp.com",
  projectId: "business-incubator-f3262",
  storageBucket: "business-incubator-f3262.appspot.com",
  messagingSenderId: "747636003067",
  appId: "1:747636003067:web:407af76f689818b608e05e",
  measurementId: "G-Q1ZL9QSGQN"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();


export{app, auth, database, ref, set};

