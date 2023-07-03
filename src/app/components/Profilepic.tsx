import Image from "next/image";
import React from "react";

const Profilepic = () => {
  return (
    <div className="border-8 rounded-full border-white w-60 h-60  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
      <Image
        src="https://storage.ning.com/topology/rest/1.0/file/get/2791877726?profile=RESIZE_710x&width=184&height=184&crop=1%3A1"
        width={1000}
        height={1000}
        alt="ironman profile picture"
      />
    </div>
  );
};

export default Profilepic;
