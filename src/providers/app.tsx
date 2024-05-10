import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { DayProvider } from "./day";
import { ExerciseDataProvider } from "./exercises";

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <DayProvider>
            <ExerciseDataProvider>{children}</ExerciseDataProvider>
          </DayProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
