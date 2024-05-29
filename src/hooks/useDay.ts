import { DayContext } from "@/providers/day";
import { useContext } from "react";

export const useDay = () => {
  const { currentDay, nextDay, prevDay } = useContext(DayContext);
  return { currentDay, nextDay, prevDay };
};
