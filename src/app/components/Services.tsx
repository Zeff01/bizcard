import React from "react";

const Services = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl md:text-4xl text-center">Services</h1>
      <div className="flex gap-2 mt-4">
        <div className="bg-black text-white h-[250px] w-[120px] rounded-xl flex justify-center items-center">
          Arc Reactor
        </div>
        <div className="bg-black text-white h-[250px] w-[120px] rounded-xl flex justify-center items-center">
          Unibeam
        </div>
        <div className="bg-black text-white h-[250px] w-[120px] rounded-xl flex justify-center items-center">
          Repulsors
        </div>
      </div>
    </div>
  );
};

export default Services;
