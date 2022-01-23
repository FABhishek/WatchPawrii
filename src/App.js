import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "./Room.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/room" element={<Room />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </Router>
  );
}

export default App;
