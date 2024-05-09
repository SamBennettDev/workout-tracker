import { Exercise } from "@/components/Exercise";
import { navbarHeight } from "@/components/Navbar";
import { useAuth } from "@/lib/auth";
import { db } from "@/providers/firebase";
import { ExercisesData, Exercise as ExerciseType } from "@/types";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";

const fetchExerciseData = async (userId: string) => {
  const exerciseRef = collection(db, userId);
  const snapshot = await getDocs(exerciseRef);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));

  const exercisesDoc = data.find((doc) => doc.id === "exercises");

  if (exercisesDoc && "data" in exercisesDoc) {
    return exercisesDoc.data as ExercisesData;
  } else {
    throw new Error(
      "Document with ID 'exercises' not found or does not contain 'data'"
    );
  }
};

export const ProtectedHome = () => {
  const auth = useAuth();

  const {
    data: exerciseData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["exerciseData"],
    enabled: auth.user !== null,
    queryFn: () => fetchExerciseData(auth.user?.uid ?? ""),
  });

  if (!auth.user) {
    return <div>Loading...</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exercises: ExerciseType[] = Object.entries(exerciseData ?? {}).map(
    ([exerciseName, data]) => ({
      exerciseName,
      data,
    })
  );

  return (
    <div>
      <div
        className="flex justify-start items-center flex-col gap-5 overflow-x-scroll"
        style={{
          height: `calc(100vh - ${String(Number(navbarHeight) * 2)}px)`,
        }}
      >
        {exercises.map((exercise) => {
          return (
            <Exercise
              exerciseName={exercise.exerciseName}
              exerciseData={exercise.data}
              key={exercise.exerciseName}
            />
          );
        })}
      </div>

      <div
        className="flex justify-around items-center"
        style={{ height: `${navbarHeight}px` }}
      >
        <button className="h-5 w-5">
          <FontAwesomeIcon icon={faLessThan} className="h-5 w-5" />
        </button>
        <h2 className="text-2xl">Day</h2>
        <button className="h-5 w-5">
          <FontAwesomeIcon icon={faGreaterThan} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
