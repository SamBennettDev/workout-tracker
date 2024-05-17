import { db } from "@/providers/firebase";
import { arrayUnion, doc, setDoc } from "firebase/firestore";

export async function addExercise(
  formData: FormData,
  userId: string,
  currentDay: string // Change the type of currentDay to string
): Promise<void> {
  try {
    const exerciseName = formData.get("exerciseName") as string;

    if (exerciseName) {
      await setDoc(
        doc(db, userId, currentDay),
        {
          exercises: arrayUnion(exerciseName),
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.error("Error adding exercise:", error);
    throw error;
  }
}
