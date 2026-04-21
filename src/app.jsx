import { useEffect, useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function getInitialTheme() {
  if (typeof document !== "undefined") {
    return document.documentElement.dataset.theme || "dark";
  }

  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("lumiatech-theme", theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
        }
      />
      <main>
        <Hero />
        <Home />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
