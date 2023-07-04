import React from "react";
import Card from "./Card";
import { AiOutlineFolder } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const CardSection = () => {
  return (
    <div className=" w-full flex justify-center gap-3 mt-8">
      <Card title="Save card" icon={<AiOutlineFolder size={22} />} />
      <Card title="Share card" icon={<IoShareOutline size={22} />} secondary />
      <Card title="Make Contact" icon={<BsTelephone size={22} />} />
    </div>
  );
};

export default CardSection;
