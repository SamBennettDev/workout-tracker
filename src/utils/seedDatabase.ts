import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/providers/firebase";
import { seedData } from "@/config/exercises"; // Assuming you have access to the seedDatabase object

export const seedUserData = async (userId: string) => {
  try {
    // Query the collection to check if it has any documents
    const exerciseRef = collection(db, userId);
    console.log(exerciseRef);
    const snapshot = await getDocs(exerciseRef);
    const hasDocuments = !snapshot.empty;

    if (!hasDocuments) {
      // Iterate over each key in seedDatabase and set the document in the database
      for (const key of Object.keys(seedData)) {
        await setDoc(doc(collection(db, userId), key), seedData[key]);
      }

      console.log("Database seeded successfully.");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

export default seedUserData;
