import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/modal" element={<Modal />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
