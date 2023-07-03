import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="my-8">
      <h1 className="text-4xl text-center">Contact Information</h1>
      <div className="flex justify-around mt-12">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black rounded-full text-white w-20 h-20 flex justify-center items-center">
            <BsTelephone size={30} />
          </div>
          <p className="text-xl">09210900799</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black rounded-full text-white w-20 h-20 flex justify-center items-center">
            <AiOutlineMessage size={40} />
          </div>
          <p className="text-xl">jzeffsomera@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
