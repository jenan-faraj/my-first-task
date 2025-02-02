import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/navbar";
import Footer from "./componants/footer";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Articles from "./pages/articles";
import Task from "./pages/TASK";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/TASK" element={<Task />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
