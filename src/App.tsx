import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background pt-0 pb-16">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}
