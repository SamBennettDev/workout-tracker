import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ExerciseData } from "@/types";
import { seedDatabase } from "./seedDatabase";

export const createExercise = async (userId: string, exerciseName: string) => {
  const formattedExerciseName = exerciseName.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  const newExercise: ExerciseData = {
    history: {},
  };

  try {
    console.log(userId);
    const userDocRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userDocRef);
    console.log("here");

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const exercises = userData?.exercises;

      console.log(exercises);

      // Merge the new exercise with the existing exercises
      const updatedExercises = {
        ...userData.exercises,
        [formattedExerciseName]: newExercise,
      };

      await updateDoc(userDocRef, {
        exercises: updatedExercises,
      });

      console.log("New exercise created successfully.");
    } else {
      seedDatabase(userId);
      console.log("New exercise created successfully.");
    }
  } catch (error) {
    console.error("Error creating new exercise:", error);
    throw error;
  }
};
