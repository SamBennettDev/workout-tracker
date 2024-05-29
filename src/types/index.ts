export interface ExerciseSet {
  reps: string;
  weight: string;
}

export interface ExerciseHistoryEntry {
  [setNum: string]: ExerciseSet;
}

export interface ExerciseData {
  history: { [date: string]: ExerciseHistoryEntry };
}

export interface ExercisesData {
  [exerciseName: string]: ExerciseData;
}

export interface Day {
  exercises: string[];
  name: string;
}

export interface UserData {
  exercises: ExercisesData;
  program: {
    [dayId: string]: Day;
  };
}
