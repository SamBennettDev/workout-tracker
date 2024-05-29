import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authProvider";
import { ExerciseDataProvider } from "./exercises";
import { DayProvider } from "./day";

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <ExerciseDataProvider>
              <DayProvider>{children}</DayProvider>
            </ExerciseDataProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
