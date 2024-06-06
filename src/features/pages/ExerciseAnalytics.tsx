import ExerciseProgress from "@/components/ExerciseHistoryGraph";
import { useExerciseData } from "@/hooks/useExercises";
import { SetStateAction, useState } from "react";

export function ExerciseAnalytics() {
  const userData = useExerciseData().exerciseData;
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleExerciseChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedExercise(event.target.value);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center gap-[20px] items-center pt-[20px] max-w-[350px] overflow-y-scroll">
      <div className="bg-muted w-full flex flex-col justify-center gap-[20px] items-center rounded-lg">
        <select
          className="rounded-lg w-full h-full bg-muted border border-muted-foreground text-3xl text-center font-medium max-h-[50px]"
          value={selectedExercise}
          onChange={handleExerciseChange}
        >
          <option value="">Select Exercise</option>
          {Object.keys(userData.exercises).map((exerciseName) => (
            <option key={exerciseName} value={exerciseName}>
              {exerciseName}
            </option>
          ))}
        </select>
        {selectedExercise ? (
          <ExerciseProgress
            exerciseName={selectedExercise}
            userData={userData}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
