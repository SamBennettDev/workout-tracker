import { app } from "@/providers/firebase";
import { seedUserData } from "@/utils/seedDatabase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  try {
    // Sign in using a popup.
    provider.addScope("profile");
    provider.addScope("email");
    const result = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const user = result.user as firebase.User;

    await seedUserData(user.uid);

    if (!user) {
      throw new Error("User not found after login.");
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("cool");
  } catch (error) {
    console.error("Error occurred during logout:", error);
  }
};
