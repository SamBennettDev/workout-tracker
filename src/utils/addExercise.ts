import { db } from "@/lib/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export async function addExercise(
  formData: FormData,
  userId: string,
  currentDay: string // Ensure currentDay is a string
): Promise<void> {
  try {
    const exerciseName = formData.get("exerciseName") as string | null;

    if (exerciseName && exerciseName.trim()) {
      const userDocRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const program = userData?.program;

        if (program && program[currentDay] && program[currentDay].exercises) {
          const exercises = program[currentDay].exercises;

          // Check if the exercise name already exists in the array
          if (!exercises.includes(exerciseName.trim())) {
            // Append the new exercise to the existing array
            program[currentDay].exercises.push(exerciseName.trim());

            // Update the user document with the modified program array
            await updateDoc(userDocRef, { program });
          } else {
            console.warn("Exercise already exists in the array.");
          }
        } else {
          console.warn("Day or exercises array not found in program.");
        }
      } else {
        console.warn("User document not found.");
      }
    } else {
      console.warn("Exercise name is empty or invalid.");
    }
  } catch (error) {
    console.error("Error adding exercise:", error);
    throw error;
  }
}
