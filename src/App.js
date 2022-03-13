import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TabNavMain from "./Componants/Navigation/TabNavMain";
import Crew from "./Pages/Crew";
import Destinations from "./Pages/Destinations";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";

function App() {
  return (
    <BrowserRouter>
      <TabNavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/technology" element={<Technology />} />
        {/* Issue #2 ... research. find a way to pass address to router. alternatively just route using a href tag + id */}
        <Route path="/moon" element={<Destinations />} />
        <Route path="/titan" element={<Destinations />} />
        <Route path="/europa" element={<Destinations />} />
        <Route path="/mars" element={<Destinations />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
