import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordChanger() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passowrd, setPassword] = useState("");

  // useRef hook
  const passowrdRef = useRef(null);

  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  const copyPasswordToClipboard = () => {
    passowrdRef.current?.select();
    passowrdRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(passowrd)
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="min-h-screen justify-center bg-black">
        <h1 className="text-4xl text-center text-white">Password generator</h1>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={passowrd}
              className="outline-none w-full py-2 px-3 my-3 rounded-s-md"
              placeholder="Password"
              readOnly
              ref={passowrdRef}
            />
            <button
              className="outline-none my-3 rounded-e-md bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1 mb-4">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1 mb-4">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 mb-4">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordChanger;
