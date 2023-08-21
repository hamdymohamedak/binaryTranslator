import React, { useState } from "react";
import "./TextToBinary.css";
function TextToBinary() {
  const [englishInput, setEnglishInput] = useState("");
  const [binaryOutput, setBinaryOutput] = useState("");

  const convertTextToBinary = () => {
    const text = englishInput;
    let binary = "";

    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      const charBinary = char.toString(2).padStart(8, "0"); // Convert to binary and pad to 8 bits
      binary += charBinary + " "; // Separate bytes with space
    }

    setBinaryOutput(binary);
  };

  return (
    <div className="TOBinaryParnet">
      <h1>Text to Binary Converter</h1>
      <textarea
        placeholder="Enter English text..."
        rows="4"
        cols="50"
        value={englishInput}
        onChange={(e) => setEnglishInput(e.target.value)}
      />
      <button className="ToBtn" onClick={convertTextToBinary}>
        Convert
      </button>
      <div>
        <p>Binary OutPut : </p>
        <p style={{ color: "white" }}>{binaryOutput}</p>
      </div>
    </div>
  );
}

export default TextToBinary;
