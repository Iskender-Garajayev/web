import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDHNWuSyie2kV5n1DOPZAlVyXuUj2USluY",
  authDomain: "restaurontapp.firebaseapp.com",
  databaseURL: "https://restaurontapp-default-rtdb.firebaseio.com",
  projectId: "restaurontapp",
  storageBucket: "restaurontapp.appspot.com",
  messagingSenderId: "182020859720",
  appId: "1:182020859720:web:e4cd9e71642dfcaf2eb57d"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};