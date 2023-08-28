import NavbarHead from "./NavbarHead";
import HomePage from "./HomePage";
import Content from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavbarHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
