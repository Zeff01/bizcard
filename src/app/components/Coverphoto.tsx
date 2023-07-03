import React from "react";
import Image from "next/image";

const Coverphoto = () => {
  return (
    <div className=" border-blue-500">
      {" "}
      <Image
        src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/93/TVM-IM-01_18192_zoom.jpg/revision/latest/scale-to-width-down/390?cb=20141129034313"
        alt="Cover Photo"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default Coverphoto;
