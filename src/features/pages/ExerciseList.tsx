import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { createExercise } from "@/utils/createExercise";
import { deleteExercisePermanently } from "@/utils/deleteExercisePermanently";
import { useAuth } from "@/hooks/useAuth";
import { useExerciseData } from "@/hooks/useExercises";

export const ExerciseList: React.FC = () => {
  const user = useAuth().currentUser;
  const { exerciseData, isLoading, error, incrementVersion } =
    useExerciseData();
  const [newExercise, setNewExercise] = useState<string>("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading exercises.</div>;

  const exercises = Object.keys(exerciseData.exercises);

  const handleAddExercise = async () => {
    if (newExercise.trim() && user) {
      try {
        await createExercise(user.uid, newExercise.trim());
        setNewExercise("");
        incrementVersion();
      } catch (error) {
        alert("Error creating exercise.");
      }
    } else {
      alert("Exercise name cannot be empty.");
    }
  };

  const handleDeleteExercise = async (exercise: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this exercise? This will also delete the exercise history."
    );
    if (confirmDelete && user) {
      try {
        await deleteExercisePermanently(user.uid, exercise);
        incrementVersion();
      } catch (error) {
        alert("Error deleting exercise.");
      }
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-start gap-[20px] items-center pt-[20px] max-w-[350px] overflow-y-scroll">
      <ul className="w-full gap-[10px] flex flex-col">
        {exercises.map((exercise) => (
          <li
            key={exercise}
            className="bg-card h-[100px] w-full flex justify-between px-[20px] items-center rounded-lg text-2xl font-semibold tracking-tight"
          >
            {exercise}
            <button onClick={() => handleDeleteExercise(exercise)}>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-card h-[100px] w-full relative flex justify-between px-[20px] items-center rounded-lg py-[23px] mb-[20px]">
        <input
          type="text"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          className="rounded-lg w-3/4 h-full bg-card border border border-muted-foreground text-3xl text-center font-medium"
        />
        <div className="absolute top-[23px] right-[106px] w-[109px] h-[1px] bg-card"></div>
        <h1 className="z-2 text-muted-foreground absolute top-[10px] right-[107px]">
          New Exercise
        </h1>
        <button onClick={handleAddExercise}>
          <FontAwesomeIcon className="text-2xl" icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
