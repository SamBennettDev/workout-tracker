import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { UserData } from "@/types";

export const seedDatabase = async (userId: string) => {
  const userRef = doc(db, "users", userId);

  const initialData: UserData = {
    exercises: {
      "Bench Press": {
        history: {},
      },
      Squat: {
        history: {},
      },
      Deadlift: {
        history: {},
      },
    },
    program: {
      "0": { exercises: [], name: "Sun" },
      "1": { exercises: [], name: "Mon" },
      "2": { exercises: [], name: "Tue" },
      "3": { exercises: [], name: "Wed" },
      "4": { exercises: [], name: "Thu" },
      "5": { exercises: [], name: "Fri" },
      "6": { exercises: [], name: "Sat" },
    },
  };

  try {
    await setDoc(userRef, initialData);
    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
};
