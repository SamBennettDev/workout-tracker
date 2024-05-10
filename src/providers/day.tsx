import React, { createContext, useState } from "react";

type DayProviderProps = {
  children: React.ReactNode;
};

// Create a context for managing the current day and navigating between days
export const DayContext = createContext({
  currentDay: 0,
  nextDay: () => {},
  prevDay: () => {},
});

// Create a provider component to manage the state and provide functions for navigation
export const DayProvider = ({ children }: DayProviderProps) => {
  // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const currentDate = new Date();
  const [currentDay, setCurrentDay] = useState(currentDate.getDay());

  // Function to navigate to the next day
  const nextDay = () => {
    setCurrentDay((prevDay) => (prevDay + 1) % 7);
  };

  // Function to navigate to the previous day
  const prevDay = () => {
    setCurrentDay((prevDay) => (prevDay - 1 + 7) % 7);
  };

  return (
    <DayContext.Provider value={{ currentDay, nextDay, prevDay }}>
      {children}
    </DayContext.Provider>
  );
};
