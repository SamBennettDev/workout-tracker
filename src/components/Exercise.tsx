import { ExerciseData } from "@/types";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Exercise({
  exerciseName,
  exerciseData,
}: {
  exerciseName: string;
  exerciseData: ExerciseData;
}) {
  // Parse and sort the dates
  const parsedDates = Object.keys(exerciseData).map((dateString) => ({
    dateString,
    parsedDate: new Date(dateString),
  }));

  // Sort the parsed dates based on the parsedDate
  parsedDates.sort((b, a) => a.parsedDate.getTime() - b.parsedDate.getTime());

  const mostRecentDate = parsedDates[0].dateString;

  const prevWeight = exerciseData[mostRecentDate][0];
  const prevReps = exerciseData[mostRecentDate][1];

  return (
    <div className="w-full h-[150px] flex flex-col text-2xl px-2">
      <div className="bg-card h-[50px] w-full flex justify-between items-center rounded-t-lg">
        <div className="px-3">
          <FontAwesomeIcon icon={faMinus} className="h-5 w-5 text-card" />
        </div>
        <h1 className="w-fit">{exerciseName}</h1>
        <button className="px-3">
          <FontAwesomeIcon icon={faMinus} className="h-5 w-5" />
        </button>
      </div>

      <form>
        <div className="bg-card h-3/5 w-full flex justify-around items-center text-lg">
          <div className="flex gap-2 w-1/3 h-2/3 jusity-center items-center">
            <input
              className="rounded-lg w-[100px] h-full bg-card border border-muted-foreground text-3xl text-center font-medium"
              placeholder={prevWeight}
            ></input>
            <h1 className="text-muted-foreground">Weight</h1>
          </div>
          <div className="flex gap-2 w-1/3 h-2/3 jusity-center items-center">
            <input
              className="rounded-lg w-[100px] h-full bg-card border border border-muted-foreground text-3xl text-center font-medium"
              placeholder={prevReps}
            ></input>
            <h1 className="text-muted-foreground">Reps</h1>
          </div>
        </div>

        <div className="bg-card h-[50px] w-full flex justify-between items-center rounded-b-lg">
          <button className="w-full h-full text-muted-foreground">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
