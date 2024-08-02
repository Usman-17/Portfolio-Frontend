import { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
