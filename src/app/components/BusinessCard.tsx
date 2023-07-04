import React from "react";
import Coverphoto from "./Coverphoto";
import Profilepic from "./Profilepic";
import Profile from "./Profile";

import SocialMedia from "./SocialMedia";
import Appointment from "./Appointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import BusinessHours from "./BusinessHours";
import Contacts from "./Contacts";
import CardSection from "./CardSection";

const BusinessCard = () => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden mb-2 border max-w-[500px]   ">
      <Coverphoto />
      <div>
        <Profilepic />
      </div>
      <Profile />
      <CardSection />

      <div className="mt-6 flex justify-center text-md">
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
