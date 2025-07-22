import React, { useState, useEffect, useRef } from "react";

const PasswordGenerator22 = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let chars = "";
    if (includeUppercase) chars += upper;
    if (includeLowercase) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars.length === 0) {
      setPassword("Select options");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  useEffect(() => {
    generatePassword(); // auto-generate password on mount
    if (inputRef.current) {
      inputRef.current.focus(); // focus the input
    }
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-5 sm:p-8">
      <h1 className="text-2xl font-bold text-center">Password Generator</h1>

      <div className="flex flex-col space-y-3">
        <input
          ref={inputRef}
          type="text"
          value={password}
          readOnly
          className="border rounded px-4 py-2 text-center text-lg font-mono bg-gray-100 outline-none"
        />

        <button
          onClick={copyToClipboard}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
        >
          Copy Password
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="font-medium">Length: {length}</label>
          <input
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-2/3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <span>Uppercase</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <span>Lowercase</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <span>Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <span>Symbols</span>
          </label>
        </div>
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator22;

