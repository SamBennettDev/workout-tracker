import { db } from "@/providers/firebase";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

export async function deleteExercise(
  exerciseName: string,
  userId: string,
  currentDay: string
): Promise<void> {
  try {
    // Reference to the document for the current day
    const exerciseDocRef = doc(db, userId, currentDay);

    // Update the document to remove the exercise from the exercises array
    await updateDoc(exerciseDocRef, {
      exercises: arrayRemove(exerciseName),
    });

    console.log("Exercise deleted successfully.");
  } catch (error) {
    console.error("Error deleting exercise:", error);
    throw error;
  }
}
