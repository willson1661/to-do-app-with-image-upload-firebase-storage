
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2JUG0MLrT2_WnmpTT0x94fhd3zZXB8Qk",
  authDomain: "todoappimagestorage.firebaseapp.com",
  projectId: "todoappimagestorage",
  storageBucket: "todoappimagestorage.appspot.com",
  messagingSenderId: "112453451444",
  appId: "1:112453451444:web:d58c20a5d85c66faad21e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
