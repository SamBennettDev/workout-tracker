import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC80Zmzr3bLsoAEY_iutQUihAvLEacDUcs",
  authDomain: "gym-tracker-f6c91.firebaseapp.com",
  projectId: "gym-tracker-f6c91",
  storageBucket: "gym-tracker-f6c91.appspot.com",
  messagingSenderId: "685632019688",
  appId: "1:685632019688:web:3b91644a9386823d267d5d",
  measurementId: "G-J1RJM6FKP3",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

let name = "";
let email = "";
let uID = "null";
const d = new Date();
let day = d.getDay();

// collection ref
let userRef = collection(db, uID);
let q = query(userRef, where("day", "==", day));
const provider = new GoogleAuthProvider();

const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(bookRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset();
  });
});

const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

const nameDisplay = document.getElementById("nameDisplay");

let unsubscribe = null;

const signInForm = document.querySelector(".signIn");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    })
    .catch((error) => {
      console.log(error);
    });
});

const logoutForm = document.querySelector(".logout");
logoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user == null) {
    name = "";
    email = "";
    uID = "";
    signInForm.style.display = "block";
    logoutForm.style.display = "none";
    unsubscribe();
  } else {
    name = user.displayName;
    email = user.email;
    uID = user.uid;
    logoutForm.style.display = "block";
    signInForm.style.display = "none";
    updateDocument(uID);
  }
  nameDisplay.textContent = name;
});

function updateDocument(ref) {
  console.log("qo");
  userRef = collection(db, ref);
  let q = query(userRef, where("__name__", "==", day.toString()));
  console.log(day);
  unsubscribe = onSnapshot(q, (snapshot) => {
    let data = [];
    snapshot.docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    console.log(data);
  });
}
