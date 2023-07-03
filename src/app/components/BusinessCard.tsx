import React from "react";
import Coverphoto from "./Coverphoto";
import Profilepic from "./Profilepic";
import Profile from "./Profile";
import Card from "./Card";
import { AiOutlineFolder } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import SocialMedia from "./SocialMedia";
import Appointment from "./Appointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import BusinessHours from "./BusinessHours";
import Contacts from "./Contacts";

const BusinessCard = () => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden mb-2 border max-w-[500px] min-w-[500px]   ">
      <Coverphoto />
      <div className="">
        <Profilepic />
      </div>
      <Profile />
      <div className=" w-full flex justify-center gap-4 mt-8">
        <Card title="Save card" icon={<AiOutlineFolder size={22} />} />
        <Card
          title="Share card"
          icon={<IoShareOutline size={22} />}
          secondary
        />
        <Card title="Make Contact" icon={<BsTelephone size={22} />} />
      </div>

      <div className="mt-8 flex justify-center text-lg">
        <h2>Weapons and Technology Company</h2>
      </div>
      <SocialMedia />
      <Appointment />
      <Services />
      <Testimonials />
      <BusinessHours />
      <Contacts />
    </div>
  );
};

export default BusinessCard;
