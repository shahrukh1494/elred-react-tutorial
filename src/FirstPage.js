import { useState, useEffect } from "react";
import Vehicles from "./Vehicles";
import Numbers from "./Numbers";
import ClassComponentExample from "./ClassComponentExample";
import ReactFormExample from "./ReactFormExample";
import RefExample from "./RefExample";
import UseReducerExample from "./UseReducerExample";
import UseCallbackExample from "./UseCallbackExample";
import UseMemoExample from "./UseMemoExample";
import useFetchHook from "./useFetchHook";

const FirstPage = () => {
  const [returnDiv, setReturnDiv] = useState("");

  const [data] = useFetchHook("https://jsonplaceholder.typicode.com/todos");

  const myArray = ["apple", "banana", "orange"];
  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
  };

  const myList = myArray.map((item) => <p>{item}</p>);

  const newArrowFunc = () => {
    setReturnDiv("Returned From an Arrow Function");
  };

  const clearText = () => {
    setReturnDiv("");
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count < 5) setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <>
      <p>FirstPage</p>
      {returnDiv ? (
        <button onClick={clearText}>Clear</button>
      ) : (
        <button onClick={newArrowFunc}>Click Here</button>
      )}
      <div> {returnDiv}</div>
      <div>{myList}</div>
      <Vehicles {...vehicleOne} />
      <Numbers />
      <ClassComponentExample />
      <ReactFormExample />
      <RefExample />
      <h1>Count till 5 : {count}</h1>
      <UseReducerExample />
      <UseCallbackExample />
      <UseMemoExample />
      <div>
        {data?.map((value, index) => (
          <div key={value.id}>
            <span>{index + 1 + ". "}</span>
            {value.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default FirstPage;
