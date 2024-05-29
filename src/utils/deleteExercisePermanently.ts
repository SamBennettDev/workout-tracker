import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { UserData } from "@/types";

export const deleteExercisePermanently = async (
  userId: string,
  exerciseName: string
) => {
  const userDocRef = doc(db, "users", userId);

  try {
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data() as UserData;

      // Remove the exercise from the user's exercises
      const updatedExercises = { ...userData.exercises };
      delete updatedExercises[exerciseName];

      // Loop through each day of the week in the program
      for (const day of Object.values(userData.program)) {
        if (day.exercises) {
          // Remove the exercise from the exercises array for the current day
          day.exercises = day.exercises.filter((ex) => ex !== exerciseName);
        }
      }

      // Update user document in Firestore with the modified exercises and program data
      await updateDoc(userDocRef, {
        exercises: updatedExercises,
        program: userData.program,
      });

      console.log(
        "Exercise deleted successfully from both exercises and program."
      );
    } else {
      console.warn("User document not found.");
    }
  } catch (error) {
    console.error("Error deleting exercise:", error);
    throw error;
  }
};
