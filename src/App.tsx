import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
