import { collection, getDocs } from "firebase/firestore";
import { db } from "@/providers/firebase";
import { Day, ExercisesData, UserData } from "@/types";
import seedUserData from "./seedDatabase";

export const fetchExerciseData = async (userId: string): Promise<UserData> => {
  try {
    const exerciseRef = collection(db, userId);
    const snapshot = await getDocs(exerciseRef);

    if (!snapshot.docs[0]) {
      await seedUserData(userId);
      return fetchExerciseData(userId);
    }

    const userData: UserData = {
      "0": snapshot.docs[0].data() as Day,
      "1": snapshot.docs[1].data() as Day,
      "2": snapshot.docs[2].data() as Day,
      "3": snapshot.docs[3].data() as Day,
      "4": snapshot.docs[4].data() as Day,
      "5": snapshot.docs[5].data() as Day,
      "6": snapshot.docs[6].data() as Day,
      exercises: snapshot.docs[7].data() as ExercisesData,
    };

    console.log(userData);

    return userData;
  } catch (error) {
    console.error("Error fetching exercise data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
