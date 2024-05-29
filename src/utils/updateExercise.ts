import { doc, updateDoc } from "firebase/firestore";
import { getCurrentDate } from "./getCurrentDate";
import { db } from "@/lib/firebase";
import { ExerciseData } from "@/types";

export async function updateExercise(
  formData: FormData,
  userId: string,
  exerciseData: ExerciseData
): Promise<void> {
  const name = formData.get("name") as string;
  let reps = formData.get("reps");
  let weight = formData.get("weight");

  // Convert reps and weight to strings
  if (typeof reps !== "string" && reps !== null) {
    reps = reps.toString();
  }

  if (typeof weight !== "string" && weight !== null) {
    weight = weight.toString();
  }

  const currentDate = getCurrentDate();

  try {
    const userDocRef = doc(db, "users", userId);

    if (reps && weight) {
      exerciseData.history[currentDate] = { "0": { reps, weight } };

      // Update the user document with the modified exercise data
      await updateDoc(userDocRef, {
        [`exercises.${name}`]: exerciseData,
      });

      console.log("Exercise updated successfully.");
    }
  } catch (error) {
    console.error("Error updating exercise:", error);
    throw error;
  }
}
