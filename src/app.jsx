import Header from "./components/header";
import Hero from "./components/hero";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
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
