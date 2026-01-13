import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

export default function App() {
  return (
    <LanguageProvider>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </LanguageProvider>
  );
}
