import { useContext, useState } from "react";
import { useAuth } from "@/lib/auth";
import { useExerciseData } from "@/providers/exercises";
import { DayContext } from "@/providers/day";

export function AddExercise() {
  const auth = useAuth();

  const { exerciseData, addExerciseAndUpdateVersion } = useExerciseData();
  const { currentDay } = useContext(DayContext);

  const [selectedExercise, setSelectedExercise] = useState("");
  const [customExercise, setCustomExercise] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (selectedExercise === "custom") {
      formData.append("exerciseName", customExercise); // Append the custom exercise if entered
    } else {
      formData.append("exerciseName", selectedExercise); // Append the selected exercise
    }
    if (auth.user) {
      await addExerciseAndUpdateVersion(
        formData,
        auth.user.uid,
        currentDay.toString()
      );
    }
  };

  const exerciseList = Object.entries(exerciseData.exercises ?? {}).map(
    ([name]) => ({
      name,
    })
  );

  return (
    <div className="w-full h-[150px] flex flex-col text-2xl px-2">
      <div className="bg-card h-[50px] w-full flex justify-center items-center rounded-t-lg">
        <h1 className="w-fit">Add Exercise</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-card h-3/5 w-full flex justify-around items-center text-lg">
          <div className="flex gap-2 w-4/5 h-2/3 jusity-center items-center">
            <select
              name="exercise"
              className="rounded-lg w-full h-full bg-card border border-muted-foreground text-3xl text-center font-medium"
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
            >
              <option value=""></option>
              {exerciseList.map((exercise, index) => (
                <option key={index} value={exercise.name}>
                  {exercise.name}
                </option>
              ))}
              <option value="custom">New</option>
            </select>
            {selectedExercise === "custom" && (
              <input
                type="text"
                placeholder=""
                className="rounded-lg w-full h-full bg-card border border-muted-foreground text-3xl text-center font-medium"
                value={customExercise}
                onChange={(e) => setCustomExercise(e.target.value)}
              />
            )}
          </div>
        </div>
        <div className="bg-card h-[50px] w-full flex justify-between items-center rounded-b-lg">
          <button type="submit" className="w-full h-full text-muted-foreground">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
