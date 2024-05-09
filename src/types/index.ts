import firebase from "firebase/compat/app";

export interface AuthState {
  user: firebase.User | null;
  isAuthenticated: boolean;
}

export interface ExerciseData {
  [date: string]: [reps: string, weight: string];
}

export interface ExercisesData {
  [exerciseName: string]: ExerciseData;
}

export interface Exercise {
  exerciseName: string;
  data: ExerciseData;
}
