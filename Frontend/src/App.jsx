import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import QuoteGenerator from "./Components/QuoteGenerator";
import JokeGenerator from "./Components/JokeGenerator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import FactsGenerator from "./Components/FactsGenerator";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<QuoteGenerator />} />
        <Route path="/jokes" element={<JokeGenerator />} />
        <Route path="/facts" element={<FactsGenerator />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
