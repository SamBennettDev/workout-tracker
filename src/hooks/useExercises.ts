import {
  ExerciseDataContext,
  ExerciseDataContextValue,
} from "@/providers/exercises";
import { useContext } from "react";

export const useExerciseData = (): ExerciseDataContextValue => {
  const context = useContext(ExerciseDataContext);
  if (!context) {
    throw new Error(
      "useExerciseData must be used within an ExerciseDataProvider"
    );
  }
  return context;
};
