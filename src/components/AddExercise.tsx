import { useContext, useState } from "react";
import { DayContext } from "@/providers/day";
import { useAuth } from "@/hooks/useAuth";
import { useExerciseData } from "@/hooks/useExercises";

export function AddExercise() {
  const user = useAuth().currentUser;

  const { exerciseData, addExerciseAndUpdateVersion } = useExerciseData();
  const { currentDay } = useContext(DayContext);

  const [selectedExercise, setSelectedExercise] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("exerciseName", selectedExercise);
    if (user) {
      await addExerciseAndUpdateVersion(
        formData,
        user.uid,
        currentDay.toString()
      );
    }
  };

  const exerciseList = Object.entries(exerciseData.exercises ?? {})
    .map(([name]) => ({ name }))
    .filter(
      ({ name }) => !exerciseData.program[currentDay]?.exercises.includes(name)
    );

  return (
    <div className="w-full h-[150px] flex flex-col text-2xl">
      <div className="bg-muted h-[50px] w-full flex justify-center items-center rounded-t-lg">
        <h1 className="w-fit">Add Exercise</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-muted h-3/5 w-full flex justify-around items-center text-lg">
          <div className="flex gap-2 w-4/5 h-2/3 jusity-center items-center">
            <select
              name="exercise"
              className="rounded-lg w-full h-full bg-muted border border-muted-foreground text-3xl text-center font-medium"
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
            >
              <option value=""></option>
              {exerciseList.map((exercise, index) => (
                <option key={index} value={exercise.name}>
                  {exercise.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="bg-muted h-[50px] w-full flex justify-between items-center rounded-b-lg">
          <button type="submit" className="w-full h-full text-muted-foreground">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
