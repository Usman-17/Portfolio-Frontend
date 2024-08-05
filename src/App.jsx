import { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ViewProjectPage from "./pages/ViewProjectPage";
import { Toaster } from "react-hot-toast";

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

        {/* <Toaster
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fffbfb",
              fontFamily: "poppins",
              fontSize: "14px",
            },
          }}
        /> */}

        <Toaster
          toastOptions={{
            style: {
              background: "linear-gradient(90deg, #6a0dad, #8a2be2)", // Subtle purple gradient
              color: "#fffbfb",
              fontFamily: "Poppins",
              fontSize: "14px",
            },
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
