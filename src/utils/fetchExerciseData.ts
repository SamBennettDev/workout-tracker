import { doc, getDoc } from "firebase/firestore";
import { UserData } from "@/types";
import { db } from "@/lib/firebase";
import { seedDatabase } from "./seedDatabase";

export const fetchExerciseData = async (userId: string): Promise<UserData> => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
      await seedDatabase(userId);
      return fetchExerciseData(userId);
    }

    const userData: UserData = userDocSnapshot.data() as UserData;

    console.log(userData);

    return userData;
  } catch (error) {
    console.error("Error fetching exercise data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
