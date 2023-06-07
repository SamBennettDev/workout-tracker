import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  query,
  where,
  serverTimestamp,
  getDoc,
  updateDoc,
  deleteField,
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
let date = d.toJSON().slice(0, 10);
let day = d.getDay().toString();
let exercises = {};

// collection ref
let userRef = collection(db, uID);
let q = query(userRef, where("day", "==", day));
const provider = new GoogleAuthProvider();

const nameDisplay = document.getElementById("nameDisplay");

let unsubscribeDays = null;
let unsubscribeExercises = null;

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

const dayChanger = document.querySelector(".dayChanger");

const addExerciseContainerForm = document.querySelector(
  ".addExerciseContainer"
);
await onAuthStateChanged(auth, (user) => {
  if (user == null) {
    name = "";
    email = "";
    uID = "";
    signInForm.style.display = "block";
    logoutForm.style.display = "none";
    dayChanger.style.display = "none";
    addExerciseContainerForm.style.display = "none";
    if (unsubscribeDays != null) {
      unsubscribeDays();
      unsubscribeExercises();
    }
    removeExercises();
  } else {
    name = user.displayName;
    email = user.email;
    uID = user.uid;
    logoutForm.style.display = "block";
    signInForm.style.display = "none";
    dayChanger.style.display = "flex";
    addExerciseContainerForm.style.display = "block";
    getExercises(uID);
    updateDocument(uID);
  }
  nameDisplay.textContent = name;
});

async function getExercises(uID) {
  userRef = collection(db, uID);
  let q = query(userRef, where("__name__", "==", "exercises"));
  unsubscribeExercises = await onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      const exerciseData = doc.data();
      Object.keys(exerciseData).forEach((key) => {
        if (key !== "id") {
          const exerciseName = key;
          const latestDate = Object.keys(exerciseData[exerciseName])
            .sort()
            .pop();
          const [lastReps, lastWeight] = exerciseData[exerciseName][latestDate];
          exercises[exerciseName] = [
            lastReps.toString(),
            lastWeight.toString(),
          ];
        }
      });
    });
  });
}

function removeExercises() {
  var elements = document.querySelectorAll(".exerciseBox");
  // Iterate over each element and remove it
  elements.forEach(function (element) {
    element.remove();
  });
}

async function updateDocument(ref) {
  dayDisplay.textContent = numToDay(day);
  const dayRef = doc(db, ref, day);
  const dayExercises = await getDoc(dayRef);
  removeExercises();

  for (const key in dayExercises.data()) {
    const exerciseName = key;
    const reps = exercises[exerciseName][0];
    const weight = exercises[exerciseName][1];
    drawExercise(exerciseName, reps, weight);
  }
}

function numToDay(num) {
  switch (num) {
    case "0":
      return "\u00A0Sun\u00A0";
    case "1":
      return "\u00A0Mon\u00A0";
    case "2":
      return "\u00A0Tue\u00A0";
    case "3":
      return "\u00A0Wed\u00A0";
    case "4":
      return "\u00A0Thu\u00A0";
    case "5":
      return "\u00A0Fri\u00A0";
    default:
      return "\u00A0Sat\u00A0";
  }
}

let dayDisplay = document.querySelector(".dayDisplay");

let form = document.querySelector(".addExercise");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let input = document.querySelector(".addExerciseInput");
  let inputValue = input.value;

  addExercise(inputValue, 0, 0);
  input.value = "";
});

let forward = document.querySelector(".forward");
forward.addEventListener("submit", (event) => {
  event.preventDefault();
  if (Number(day) == 6) {
    day = "0";
  } else {
    day = (Number(day) + 1).toString();
  }
  updateDocument(uID);
});

let back = document.querySelector(".back");
back.addEventListener("submit", (event) => {
  event.preventDefault();
  if (Number(day) == 0) {
    day = "6";
  } else {
    day = (Number(day) - 1).toString();
  }
  updateDocument(uID);
});

async function addExercise(exerciseName, reps, weight) {
  const newData = {
    [exerciseName]: {
      [date]: [reps, weight],
    },
  };

  if (!(exerciseName in exercises && reps == 0 && weight == 0)) {
    await setDoc(doc(db, uID, "exercises"), newData, { merge: true });
  }
  await setDoc(
    doc(db, uID, day),
    { [exerciseName]: exerciseName },
    { merge: true }
  );
  updateDocument(uID);
}

async function deleteExercise(exerciseName) {
  const confirmed = confirm("Are you sure you want to delete this exercise?");
  if (confirmed) {
    await updateDoc(doc(db, uID, day), { [exerciseName]: deleteField() });
  }
  updateDocument(uID);
}

function drawExercise(exerciseName, prevReps, prevWeight) {
  // Create the outer div element with the class "exerciseBox"
  const exerciseBox = document.createElement("div");
  exerciseBox.classList.add("exerciseBox");

  // Create the form element for adding exercises
  const addExerciseForm = document.createElement("form");
  addExerciseForm.classList.add("updateExercise");
  addExerciseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const exerciseBox = updateButton.closest(".exerciseBox");
    const weight = exerciseBox.querySelector(".weight").value;
    const reps = exerciseBox.querySelector(".reps").value;
    addExercise(exerciseName, reps, weight);
  });

  // Create the inner div element with the class "exerciseTitle"
  const exerciseTitle = document.createElement("div");
  exerciseTitle.classList.add("exerciseTitle");

  // Create the h2 element for the exercise name
  const exerciseNameHeading = document.createElement("h2");
  exerciseNameHeading.classList.add("exerciseName");
  exerciseNameHeading.textContent = exerciseName;

  // Append the exercise name heading to the exercise title div
  exerciseTitle.appendChild(exerciseNameHeading);

  // Append the exercise title div to the add exercise form
  addExerciseForm.appendChild(exerciseTitle);

  // Create the inner div element with the class "exerciseDescription"
  const exerciseDescription = document.createElement("div");
  exerciseDescription.classList.add("exerciseDescription");

  // Create the input element for weight
  const weightInput = document.createElement("input");
  weightInput.type = "text";
  weightInput.name = "weight";
  weightInput.placeholder = prevWeight;
  weightInput.classList.add("weight");
  weightInput.value = "";

  // Create the h2 element for weight unit
  const weightUnit = document.createElement("h2");
  weightUnit.textContent = "\u00A0Lbs";

  // Create the spacer div element
  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  // Create the input element for reps
  const repsInput = document.createElement("input");
  repsInput.type = "text";
  repsInput.name = "reps";
  repsInput.placeholder = prevReps;
  repsInput.classList.add("reps");
  repsInput.value = "";

  // Create the h2 element for reps unit
  const repsUnit = document.createElement("h2");
  repsUnit.textContent = "\u00A0reps";

  // Append all elements to the exercise description div
  exerciseDescription.appendChild(weightInput);
  exerciseDescription.appendChild(weightUnit);
  exerciseDescription.appendChild(spacer);
  exerciseDescription.appendChild(repsInput);
  exerciseDescription.appendChild(repsUnit);

  // Append the exercise description div to the add exercise form
  addExerciseForm.appendChild(exerciseDescription);

  // Create the button for updating the exercise
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.classList.add("update");

  // Append the add exercise form and update button to the exercise box div
  addExerciseForm.appendChild(updateButton);
  exerciseBox.appendChild(addExerciseForm);

  // Create the form element for deleting exercises
  const deleteExerciseForm = document.createElement("form");
  deleteExerciseForm.classList.add("deleteExercise");
  deleteExerciseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    deleteExercise(exerciseName);
  });

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");

  // Append the delete button to the delete exercise form
  deleteExerciseForm.appendChild(deleteButton);

  // Append the delete exercise form to the exercise box div
  exerciseBox.appendChild(deleteExerciseForm);

  // Append the exercise box to the desired parent element on the webpage
  const exerciseContainer =
    document.getElementsByClassName("exerciseContainer")[0];
  exerciseContainer.appendChild(exerciseBox);
}
