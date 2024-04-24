import { app } from "@/providers/firebase";
import { AuthState } from "@/types";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

const authFirebase = getAuth(app);

export const useAuth = (): AuthState => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false, // Assuming user is initially not authenticated
  });

  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged((user) => {
      setAuth({
        user: user as firebase.User,
        isAuthenticated: !!user, // Convert user to boolean (true if user exists, false if null)
      });
    });

    return () => unsubscribe();
  }, []);

  return auth;
};
