import React, { useState } from "react";
import "./BinaryToTextConverter.css";
function BinaryToTextConverter() {
  const [binaryInput, setBinaryInput] = useState("");
  const [englishOutput, setEnglishOutput] = useState("");

  const convertBinaryToText = () => {
    // Remove spaces and ensure valid binary format
    const cleanBinaryInput = binaryInput.replace(/\s/g, "");
    if (!/^[01]+$/.test(cleanBinaryInput)) {
      setEnglishOutput("Invalid binary input");
      return;
    }

    // Convert binary to text
    let text = "";
    for (let i = 0; i < cleanBinaryInput.length; i += 8) {
      const byte = cleanBinaryInput.substr(i, 8);
      const decimalValue = parseInt(byte, 2);
      text += String.fromCharCode(decimalValue);
    }

    setEnglishOutput(text);
  };

  return (
    <div className="App">
      <h1>Binary to Text Converter</h1>
      <textarea
        placeholder="Enter binary code..."
        rows="4"
        cols="50"
        value={binaryInput}
        onChange={(e) => setBinaryInput(e.target.value)}
      />
      <button className="btn" onClick={convertBinaryToText}>
        Convert
      </button>
      <div>
        <p style={{ color: "white" }}>English Text : </p>
        <p className="outPut">{englishOutput}</p>
      </div>
    </div>
  );
}

export default BinaryToTextConverter;
