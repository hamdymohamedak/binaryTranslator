import React from "react";
import "./App.css";
import BinaryToTextConverter from "./BinaryToTextConverter";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import TextToBinary from "./TextToBinary";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BinaryToTextConverter />} />
        <Route
          path="/TextToBinary"
          element={
            <>
              <TextToBinary />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
