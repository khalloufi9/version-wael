import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbarr";
import Home from "./Component/Home";
import Userlogin from "./Component/Userlogin/Userlogin";
import Admin from "./Component/Admin/Admin";
import Responsable from "./Component/Responsable/Team";
import FormArbitre from "./Component/Admin/FormArbitre";
import FormTerrain from "./Component/Admin/FormTerrain";
import Match from "./Component/Responsable/Match";
import Contact from "./Component/Contact/Contact";
import Matches from "./Component/Matches/Matches";
import Players from "./Component/Players/Players";
import Player from "./Component/Responsable/Player";
import Nav from "./Component/Navbar/nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/profile" element={<Admin />} />
        <Route path="/Arbitre" element={<FormArbitre />} />
        <Route path="/Terrain" element={<FormTerrain />} />
        <Route path="/responsable" element={<Responsable />} />
        <Route path="/player" element={<Player />} />
        <Route path="/match" element={<Match />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </div>
  );
}

export default App;
