import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchExerciseData } from "@/utils/fetchExerciseData";
import { UserData } from "@/types";
import { addExercise } from "@/utils/addExercise";
import { deleteExercise } from "@/utils/deleteExercise";
import { useAuth } from "@/hooks/useAuth";

export type ExerciseDataContextValue = {
  exerciseData: UserData;
  isLoading: boolean;
  error: Error | null;
  addExerciseAndUpdateVersion: (
    formData: FormData,
    userId: string,
    currentDay: string
  ) => Promise<void>;
  deleteExerciseAndUpdateVersion: (
    exerciseName: string,
    userId: string,
    currentDay: string
  ) => Promise<void>;
  incrementVersion: () => void; // New function to increment version
};

const initialContextValue: ExerciseDataContextValue = {
  exerciseData: {
    exercises: {},
    program: {},
  },
  isLoading: false,
  error: null,
  addExerciseAndUpdateVersion: addExercise,
  deleteExerciseAndUpdateVersion: deleteExercise,
  incrementVersion: () => {}, // Placeholder function
};

type ExerciseDataProviderProps = {
  children: React.ReactNode;
};

export const ExerciseDataContext =
  createContext<ExerciseDataContextValue>(initialContextValue);

export const ExerciseDataProvider = ({
  children,
}: ExerciseDataProviderProps) => {
  const user = useAuth().currentUser;
  const [exerciseData, setExerciseData] = useState<UserData>(
    initialContextValue.exerciseData
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [version, setVersion] = useState<number>(0); // Add version state

  const {
    data,
    error: queryError,
    isLoading: queryIsLoading,
  } = useQuery({
    queryKey: ["exerciseData", version],
    enabled: user !== null,
    queryFn: () => fetchExerciseData(user?.uid ?? ""),
  });

  useEffect(() => {
    if (data) {
      setExerciseData(data);
    }
  }, [data]);

  useEffect(() => {
    if (queryError) {
      setError(queryError);
    }
  }, [queryError]);

  useEffect(() => {
    setIsLoading(queryIsLoading);
  }, [queryIsLoading]);

  const addExerciseAndUpdateVersion = async (
    formData: FormData,
    userId: string,
    currentDay: string
  ) => {
    await addExercise(formData, userId, currentDay);
    setVersion((prevVersion) => prevVersion + 1); // Increment version
  };

  const deleteExerciseAndUpdateVersion = async (
    exerciseName: string,
    userId: string,
    currentDay: string
  ) => {
    await deleteExercise(exerciseName, userId, currentDay);
    setVersion((prevVersion) => prevVersion + 1); // Increment version
  };

  const incrementVersion = () => {
    setVersion((prevVersion) => prevVersion + 1); // Increment version
  };

  return (
    <ExerciseDataContext.Provider
      value={{
        exerciseData,
        isLoading,
        error,
        addExerciseAndUpdateVersion,
        deleteExerciseAndUpdateVersion,
        incrementVersion,
      }}
    >
      {children}
    </ExerciseDataContext.Provider>
  );
};
