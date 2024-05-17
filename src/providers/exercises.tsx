import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchExerciseData } from "@/utils/fetchExerciseData";
import { useAuth } from "@/lib/auth";
import { UserData } from "@/types";
import { addExercise } from "@/utils/addExercise";
import { deleteExercise } from "@/utils/deleteExercise";

type ExerciseDataContextValue = {
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
};

const initialContextValue: ExerciseDataContextValue = {
  exerciseData: {
    exercises: {},
    "0": { exercises: [], name: "0" },
    "1": { exercises: [], name: "1" },
    "2": { exercises: [], name: "2" },
    "3": { exercises: [], name: "3" },
    "4": { exercises: [], name: "4" },
    "5": { exercises: [], name: "5" },
    "6": { exercises: [], name: "6" },
  },
  isLoading: false,
  error: null,
  addExerciseAndUpdateVersion: addExercise,
  deleteExerciseAndUpdateVersion: deleteExercise,
};

type ExerciseDataProviderProps = {
  children: React.ReactNode;
};

export const ExerciseDataContext =
  createContext<ExerciseDataContextValue>(initialContextValue);

export const ExerciseDataProvider = ({
  children,
}: ExerciseDataProviderProps) => {
  const auth = useAuth();
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
    enabled: auth.user !== null,
    queryFn: () => fetchExerciseData(auth.user?.uid ?? ""),
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

  return (
    <ExerciseDataContext.Provider
      value={{
        exerciseData,
        isLoading,
        error,
        addExerciseAndUpdateVersion,
        deleteExerciseAndUpdateVersion,
      }}
    >
      {children}
    </ExerciseDataContext.Provider>
  );
};

export const useExerciseData = (): ExerciseDataContextValue => {
  const context = useContext(ExerciseDataContext);
  if (!context) {
    throw new Error(
      "useExerciseData must be used within an ExerciseDataProvider"
    );
  }
  return context;
};
