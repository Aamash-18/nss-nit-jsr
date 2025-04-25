import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import EventGallery from "./pages/EventGallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import NSSLoader from "./components/NSSLoader";
import Scrollbar from "./components/Scrollbar";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Scrollbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="/gallery/:eventId" element={<EventGallery />} />
            <Route path="/team" element={<Team />} />/
            <Route path="/contact" element={<Contact />} />
          </Route>
            <Route path="/a" element={<NSSLoader/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
