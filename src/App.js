import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Latest from "./pages/Latest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latest-release" element={<Latest />} />
    </Routes>
  );
}

export default App;
