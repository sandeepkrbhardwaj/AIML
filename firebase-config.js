// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByNguF8LnWae1tehQFT3f0TGRsRtst-lk",
  authDomain: "aiml-59e44.firebaseapp.com",
  projectId: "aiml-59e44",
  storageBucket: "aiml-59e44.appspot.com",
  messagingSenderId: "495020918333",
  appId: "1:495020918333:web:c6ed2308e89ad15d1f0c54"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
import { deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
