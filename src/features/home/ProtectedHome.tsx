import { Exercise } from "@/components/Exercise";
import { navbarHeight } from "@/components/Navbar";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DayContext } from "@/providers/day";
import { useContext } from "react";
import { useExerciseData } from "@/providers/exercises";

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
    console.log(exerciseData);
    const exercises = Object.entries(exerciseData.exercises ?? {}).map(
      ([name, data]) => ({
        name,
        data,
      })
    );

    return (
      <div>
        <div
          className="flex justify-start items-center flex-col gap-5 overflow-x-scroll max-w-[450px] m-auto"
          style={{
            height: `calc(100vh - ${String(Number(navbarHeight) * 2)}px)`,
          }}
        >
          {exercises.map((exercise) => {
            return (
              <Exercise
                exerciseName={exercise.name}
                exerciseData={exercise.data}
                key={exercise.name}
              />
            );
          })}
        </div>

        <div
          className="flex justify-around items-center"
          style={{ height: `${navbarHeight}px` }}
        >
          <button onClick={prevDay} className="h-5 w-5">
            <FontAwesomeIcon icon={faLessThan} className="h-5 w-5" />
          </button>
          <h2 className="text-2xl">
            {
              // @ts-ignore
              exerciseData[currentDay].name.toUpperCase()
            }
          </h2>
          <button onClick={nextDay} className="h-5 w-5">
            <FontAwesomeIcon icon={faGreaterThan} className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }
};
