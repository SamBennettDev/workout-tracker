import { useAuth } from "@/hooks/useAuth";
import { ExerciseData } from "@/types";
import { updateExercise } from "@/utils/updateExercise";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H3 } from "./Typography";
import { useDay } from "@/hooks/useDay";
import { useExerciseData } from "@/hooks/useExercises";

export function Exercise({
  exerciseName,
  exerciseData,
}: {
  exerciseName: string;
  exerciseData: ExerciseData;
}) {
  const user = useAuth().currentUser;
  const { deleteExerciseAndUpdateVersion, incrementVersion } =
    useExerciseData();
  const { currentDay } = useDay();

  // Parse and sort the dates
  const parsedDates = Object.keys(exerciseData["history"]).map(
    (dateString) => ({
      dateString,
      parsedDate: new Date(dateString),
    })
  );

  // Sort the parsed dates based on the parsedDate
  parsedDates.sort((b, a) => a.parsedDate.getTime() - b.parsedDate.getTime());

  const mostRecentDate = parsedDates[0]?.dateString || null;

  const mostRecentEntry = mostRecentDate
    ? exerciseData["history"][mostRecentDate]
    : null;

  const prevWeight = mostRecentEntry ? mostRecentEntry["0"].weight : null;
  const prevReps = mostRecentEntry ? mostRecentEntry["0"].reps : null;

  const placeholderWeight =
    prevWeight !== null ? prevWeight.toString() : undefined;
  const placeholderReps = prevReps !== null ? prevReps.toString() : undefined;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (user) {
      await updateExercise(formData, user.uid, exerciseData);
      incrementVersion();
    }
  };

  return (
    <div className="w-full h-[175px] flex flex-col text-2xl">
      <div className="bg-muted h-[50px] w-full flex justify-between items-center rounded-t-lg">
        <div className="px-3">
          <FontAwesomeIcon icon={faMinus} className="h-5 w-5 text-muted" />
        </div>
        <H3>{exerciseName}</H3>
        <button
          onClick={() => {
            if (user) {
              deleteExerciseAndUpdateVersion(
                exerciseName,
                user?.uid,
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
        <div className="bg-card h-[75px] w-full flex justify-around items-center text-lg">
          <div className="relative flex gap-2 w-1/3 h-2/3 jusity-center items-center">
            <input
              inputMode="numeric"
              name="weight"
              className="rounded-lg w-[100px] h-full bg-card border border-muted-foreground text-3xl text-center font-medium"
              placeholder={placeholderWeight}
            ></input>
            <div className="absolute top-[0px] right-[33px] w-[33px] h-[1px] bg-card"></div>
            <h1 className="z-2 text-muted-foreground absolute top-[-13px] right-[34px]">
              Lbs
            </h1>
          </div>
          <div className="relative flex gap-2 w-1/3 h-2/3 jusity-center items-center">
            <input
              inputMode="numeric"
              name="reps"
              className="rounded-lg w-[100px] h-full bg-card border border border-muted-foreground text-3xl text-center font-medium"
              placeholder={placeholderReps}
            ></input>
            <div className="absolute top-[0px] right-[33px] w-[46px] h-[1px] bg-card"></div>
            <h1 className="z-2 text-muted-foreground absolute top-[-13px] right-[34px]">
              Reps
            </h1>
          </div>
        </div>

        <div className="bg-muted h-[50px] w-full flex justify-between items-center rounded-b-lg">
          <button type="submit" className="w-full h-full text-muted-foreground">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
