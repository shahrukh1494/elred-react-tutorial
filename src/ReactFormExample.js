import React, { useState } from "react";

const ReactFormExample = () => {
  const [input, setinput] = useState("");
  const [output, setOutput] = useState("");

  const submitFunc = (e) => {
    e.preventDefault();
    setOutput(input);
    setinput("");
  };

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  return (
    <>
      <h2>React Form Example</h2>
      <form onSubmit={(e) => submitFunc(e)}>
        <input type="text" value={input} onChange={(e) => handleChange(e)} />
        <input type="submit" value="Submit" />
      </form>
      <div>{output}</div>
    </>
  );
};

export default ReactFormExample;
