import React, { memo } from "react";

const Vehicles = ({ brand, model, type, year, color }) => {
  const myVehicle = {
    brandName: "Ford",
    modelName: "Mustang",
  };

  const updateMyVehicle = {
    typeName: "car",
    yearManufactured: 2021,
    colorName: "yellow",
  };

  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
  const { colorName } = myUpdatedVehicle;
  return (
    <>
      <div>
        Vehicle brand : {brand}, Vehicle model : {model}, Vehicle type: {type},
        Vehicle year: {year}, Vehicle color : {color},
      </div>
      <div style={{ color: "yellow" }}>Color: {colorName}</div>
    </>
  );
};

export default memo(Vehicles);
