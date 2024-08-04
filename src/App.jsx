import { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ViewProjectPage from "./pages/ViewProjectPage";

const App = () => {
  // Scroll to Top Component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ViewProjectPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
