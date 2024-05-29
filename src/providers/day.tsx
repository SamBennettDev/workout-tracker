import { ReactNode, createContext, useState } from "react";

export const DayContext = createContext({
  currentDay: new Date().getDay(),
  nextDay: () => {},
  prevDay: () => {},
});

interface DayProviderProps {
  children: ReactNode;
}

export const DayProvider = ({ children }: DayProviderProps) => {
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  console.log(new Date().getDay());

  const nextDay = () => {
    setCurrentDay((currentDay + 1) % 7);
  };

  const prevDay = () => {
    setCurrentDay((currentDay + 6) % 7);
  };

  return (
    <DayContext.Provider value={{ currentDay, nextDay, prevDay }}>
      {children}
    </DayContext.Provider>
  );
};
