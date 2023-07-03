import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex  justify-center gap-4 mt-8 cursor-pointer">
      <AiOutlineFacebook size={40} />
      <AiOutlineInstagram size={40} />
      <AiFillTwitterSquare size={40} />
    </div>
  );
};

export default SocialMedia;
