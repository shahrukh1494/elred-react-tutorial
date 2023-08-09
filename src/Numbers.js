import React from "react";

const Numbers = () => {
  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo];
  return (
    <>
      <div>Mapped Numbers : </div>
      {numbersCombined.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </>
  );
};

export default Numbers;
