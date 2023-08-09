import { useState, useEffect, useRef } from "react";

function RefExample() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div>Enter something : </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count with useRef: {count.current}</h1>
    </>
  );
}

export default RefExample;
