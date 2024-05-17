import { useAuth } from "@/lib/auth";
import { DayContext } from "@/providers/day";
import { useExerciseData } from "@/providers/exercises";
import { ExerciseData } from "@/types";
import { updateExercise } from "@/utils/updateExercise";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

export function Exercise({
  exerciseName,
  exerciseData,
}: {
  exerciseName: string;
  exerciseData: ExerciseData;
}) {
  const auth = useAuth();
  const { deleteExerciseAndUpdateVersion } = useExerciseData();
  const { currentDay } = useContext(DayContext);

  // Parse and sort the dates
  const parsedDates = Object.keys(exerciseData).map((dateString) => ({
    dateString,
    parsedDate: new Date(dateString),
  }));

  // Sort the parsed dates based on the parsedDate
  parsedDates.sort((b, a) => a.parsedDate.getTime() - b.parsedDate.getTime());

  const mostRecentDate = parsedDates[0].dateString;

  const prevWeight = exerciseData[mostRecentDate][1];
  const prevReps = exerciseData[mostRecentDate][0];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (auth.user) {
      await updateExercise(formData, auth.user.uid);
    }
  };

  return (
    <div className="w-full h-[150px] flex flex-col text-2xl px-2">
      <div className="bg-card h-[50px] w-full flex justify-between items-center rounded-t-lg">
        <div className="px-3">
          <FontAwesomeIcon icon={faMinus} className="h-5 w-5 text-card" />
        </div>
        <h1 className="w-fit">{exerciseName}</h1>
        <button
          onClick={() => {
            if (auth.user) {
              deleteExerciseAndUpdateVersion(
                exerciseName,
                auth.user?.uid,
                currentDay.toString()
              );
            }
          }}
          className="px-3"
        >
          <FontAwesomeIcon icon={faMinus} className="h-5 w-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={exerciseName} name="name"></input>
        <div className="bg-card h-3/5 w-full flex justify-around items-center text-lg">
          <div className="flex gap-2 w-1/3 h-2/3 jusity-center items-center">
            <input
              name="weight"
              className="rounded-lg w-[100px] h-full bg-card border border-muted-foreground text-3xl text-center font-medium"
              placeholder={prevWeight}
            ></input>
            <h1 className="text-muted-foreground">Lbs</h1>
          </div>
          <div className="flex gap-2 w-1/3 h-2/3 jusity-center items-center">
            <input
              name="reps"
              className="rounded-lg w-[100px] h-full bg-card border border border-muted-foreground text-3xl text-center font-medium"
              placeholder={prevReps}
            ></input>
            <h1 className="text-muted-foreground">Reps</h1>
          </div>
        </div>

        <div className="bg-card h-[50px] w-full flex justify-between items-center rounded-b-lg">
          <button type="submit" className="w-full h-full text-muted-foreground">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
