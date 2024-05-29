import { Exercise } from "@/components/Exercise";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddExercise } from "@/components/AddExercise";
import { navbarHeight } from "@/utils/sizes";
import { useDay } from "@/hooks/useDay";
import { useExerciseData } from "@/hooks/useExercises";

export const ProtectedHome = () => {
  const { exerciseData, isLoading, error } = useExerciseData();
  const { currentDay, nextDay, prevDay } = useDay();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (exerciseData) {
    const dayData = exerciseData.program[currentDay];
    const exercises = (dayData?.exercises as string[]) ?? [];
    const dayName = dayData?.name ?? "";

    return (
      <div className="h-full w-full flex flex-col justify-between items-center overflow-y-scroll">
        <div
          className="flex justify-around items-center w-full max-w-[450px]"
          style={{ height: `${navbarHeight}px` }}
        >
          <button onClick={prevDay} className="h-5 w-5">
            <FontAwesomeIcon icon={faLessThan} className="h-5 w-5" />
          </button>
          <h2 className="text-2xl">{dayName.toUpperCase()}</h2>
          <button onClick={nextDay} className="h-5 w-5">
            <FontAwesomeIcon icon={faGreaterThan} className="h-5 w-5" />
          </button>
        </div>

        <div
          className="flex justify-start items-center flex-col gap-5 overflow-x-scroll w-full max-w-[350px] pt-5"
          style={{ height: `calc(100dvh - ${navbarHeight}px)` }}
        >
          {exercises.map((name: string) => {
            const data = exerciseData.exercises[name];
            return (
              <Exercise exerciseName={name} exerciseData={data} key={name} />
            );
          })}

          <AddExercise />
        </div>
      </div>
    );
  }

  return null;
};
