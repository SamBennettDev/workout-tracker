import { Exercise } from "@/components/Exercise";
import { navbarHeight } from "@/components/Navbar";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DayContext } from "@/providers/day";
import { useContext } from "react";
import { useExerciseData } from "@/providers/exercises";
import { AddExercise } from "@/components/AddExercise";
import { Exercise as ExerciseType, UserData } from "@/types";

export const ProtectedHome = () => {
  const { exerciseData, isLoading, error } = useExerciseData();
  const { currentDay, nextDay, prevDay } = useContext(DayContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (exerciseData) {
    const exercises = (
      (exerciseData[currentDay as keyof UserData]?.exercises as string[]) ?? []
    ).map((name: string) => ({
      name,
      data: exerciseData.exercises[name],
    }));

    return (
      <div>
        <div
          className="flex justify-start items-center flex-col gap-5 overflow-x-scroll max-w-[450px] m-auto"
          style={{
            height: `calc(100vh - ${String(Number(navbarHeight) * 2)}px)`,
          }}
        >
          {exercises.map((exercise: ExerciseType) => {
            return (
              <Exercise
                exerciseName={exercise.name}
                exerciseData={exercise.data}
                key={exercise.name}
              />
            );
          })}

          <AddExercise />
        </div>

        <div
          className="flex justify-around items-center"
          style={{ height: `${navbarHeight}px` }}
        >
          <button onClick={prevDay} className="h-5 w-5">
            <FontAwesomeIcon icon={faLessThan} className="h-5 w-5" />
          </button>
          <h2 className="text-2xl">
            {(
              exerciseData[currentDay as keyof UserData].name as string
            ).toUpperCase()}
          </h2>
          <button onClick={nextDay} className="h-5 w-5">
            <FontAwesomeIcon icon={faGreaterThan} className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }
};
