'use client'

import React from "react";

const PropertyType = ({filterFunctions}) => {

  const options = [


    { label: "매매", defaultChecked: false },
    { label: "전세" },
    { label: "월세" },
   
  ];

  return (
    <>
    <label className="custom_checkbox"  >
          전체
          <input type="checkbox"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e=>{filterFunctions?.setPropertyTypes([])})}
  />
          <span className="checkmark" />
        </label>
      {options.map((option, index) => (
        <label className="custom_checkbox" key={index} >
          {option.label}
          <input type="checkbox"
          checked={filterFunctions?.propertyTypes.includes(option.label)}
          onChange={(e=>{filterFunctions.handlepropertyTypes(option.label)})}
  />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
