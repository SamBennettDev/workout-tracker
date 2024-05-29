import { db } from "@/lib/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export async function deleteExercise(
  exerciseName: string,
  userId: string,
  currentDay: string
): Promise<void> {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const program = userData?.program;

      if (program && program[currentDay] && program[currentDay].exercises) {
        const exercises = program[currentDay].exercises;

        // Check if the exercise name already exists in the array
        if (exercises.includes(exerciseName.trim())) {
          // Remove the exercise from the array
          const updatedExercises = exercises.filter(
            (ex: string) => ex !== exerciseName.trim()
          );

          // Update the program array with the modified exercises array
          program[currentDay].exercises = updatedExercises;

          // Update the user document with the modified program array
          await updateDoc(userDocRef, { program });

          console.log("Exercise deleted successfully.");
        } else {
          console.warn("Exercise not found in the array.");
        }
      } else {
        console.warn("Day or exercises array not found in program.");
      }
    } else {
      console.warn("Document for the current day not found.");
    }
  } catch (error) {
    console.error("Error deleting exercise:", error);
    throw error;
  }
}
