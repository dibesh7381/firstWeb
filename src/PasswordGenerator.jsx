import React, { useState, useRef, useEffect } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const passwordRef = useRef(null);

  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  const generatePassword = () => {
    let charSet = '';
    if (includeLowercase) charSet += lowerChars;
    if (includeUppercase) charSet += upperChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet.length === 0) {
      setPassword('Select at least one option!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyPasswordToClipboard = () => {
    if (passwordRef.current && password) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, includeUppercase, includeLowercase]);

  return (
    // Outer container: Centers content vertically/horizontally, adds basic background.
    // p-4 adds padding on all sides, good for mobile small screens.
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      {/* Main card container */}
      {/* w-full: takes full width on all screens (mobile first) */}
      {/* max-w-md: limits max width on medium screens and up, ensuring readability */}
      {/* mx-auto: centers the card when max-w-md is active */}
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-auto my-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Password Generator
        </h2>

        {/* Password Display Area */}
        {/* flex: arranges input and button in a row */}
        <div className="flex mb-6">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            // flex-grow: input takes available space, pushing copy button to the right
            // text-lg: suitable font size for most screens
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none bg-gray-100 text-lg font-mono"
            placeholder="Your password will appear here"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 text-white px-4 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
          >
            Copy
          </button>
        </div>

        {/* Controls Section */}
        {/* flex-col: stacks items vertically (default for mobile) */}
        {/* space-y-4: adds vertical spacing between direct children */}
        <div className="flex flex-col space-y-4">
          {/* Length Slider */}
          {/* flex items-center: aligns label, slider, and number horizontally and vertically centered */}
          <div className="flex items-center">
            {/* w-24: fixed width for label. On very small screens, this might be tight,
                      but labels generally need space. Could use md:w-32 if label is longer on desktop. */}
            <label htmlFor="length" className="text-lg text-gray-700 w-24">Length:</label>
            <input
              type="range"
              id="length"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="flex-grow accent-blue-600" // flex-grow makes slider take available space
            />
            {/* w-10 text-right: fixed width and right-align for the number display */}
            <span className="ml-4 text-xl font-semibold text-gray-800 w-10 text-right">{length}</span>
          </div>

          {/* Character Type Checkboxes */}
          {/* flex-col and space-y-2: ensures checkboxes stack vertically with spacing on all screens */}
          <div className="flex flex-col space-y-2">
            {/* Each checkbox row */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="lowercase"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                // h-5 w-5: fixed size for checkbox, good for touch targets
                className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 rounded border-gray-300"
                disabled={!includeUppercase && !includeNumbers && !includeSymbols}
              />
              <label htmlFor="lowercase" className="text-lg text-gray-700">Include Lowercase Letters (a-z)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="uppercase"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 rounded border-gray-300"
                disabled={!includeLowercase && !includeNumbers && !includeSymbols}
              />
              <label htmlFor="uppercase" className="text-lg text-gray-700">Include Uppercase Letters (A-Z)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 rounded border-gray-300"
                disabled={!includeLowercase && !includeUppercase && !includeSymbols}
              />
              <label htmlFor="numbers" className="text-lg text-gray-700">Include Numbers (0-9)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 rounded border-gray-300"
                disabled={!includeLowercase && !includeUppercase && !includeNumbers}
              />
              <label htmlFor="symbols" className="text-lg text-gray-700">Include Symbols (!@#$)</label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-xl font-semibold"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;