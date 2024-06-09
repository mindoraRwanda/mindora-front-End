import React from "react";

export const Member = ({ mname, role, specialty, img }) => {
  return (
    <div className="w-80 h-96 relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={img}
        className="w-full h-full object-cover object-center"
        alt=""
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-600 to-transparent p-4">
        <h2 className="text-2xl font-bold text-white">{mname}</h2>
        <p className="text-white">{role}</p>
        <p className="text-white">{specialty}</p>
      </div>
    </div>
  );
};