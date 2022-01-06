import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal/modal";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
