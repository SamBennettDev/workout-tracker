import { doc, setDoc } from "firebase/firestore";
import { getCurrentDate } from "./getCurrentDate";
import { db } from "@/providers/firebase";

export async function updateExercise(
  formData: FormData,
  userId: string
): Promise<void> {
  const name = formData.get("name") as string;
  const reps = formData.get("reps");
  const weight = formData.get("weight");

  console.log(name);
  const newData = {
    [name]: {
      [getCurrentDate()]: [reps, weight],
    },
  };
  if (!(reps == "0" && weight == "0")) {
    await setDoc(doc(db, userId, "exercises"), newData, {
      merge: true,
    });
  }
}
