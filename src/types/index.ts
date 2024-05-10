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
  name: string;
  data: ExerciseData;
}

export interface Day {
  exercises: string[];
  name: string;
}

export interface UserData {
  exercises: ExercisesData;
  0: Day;
  1: Day;
  2: Day;
  3: Day;
  4: Day;
  5: Day;
  6: Day;
}
