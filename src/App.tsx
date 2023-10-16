import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Exhibitions from "./pages/Exhibitions/Exhibitions";
import Speakers from "./pages/Speakers/Speakers";
import "./App.scss";
import EventProgram from "./pages/EventProgram/EventProgram";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mapa-stoisk">
          <Route index element={<Exhibitions />} />
        </Route>
        <Route path="prelegaci" element={<Speakers />} />
        <Route path="program-wydarzenia" element={<EventProgram />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
