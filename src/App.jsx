import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
