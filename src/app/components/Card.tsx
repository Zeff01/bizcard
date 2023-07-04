import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  secondary?: boolean;
}
const Card = ({ icon, title, secondary }: CardProps) => {
  return (
    <div
      className={`${
        secondary
          ? "bg-white text-black border-4 border-black"
          : "bg-black text-white"
      }  px-2 py-2 md:py-4 rounded-lg pointer-cursor flex items-center gap-3 text-xs md:text-sm cursor-pointer hover:shadow-xl hover:-translate-y-2 duration-500 `}
    >
      {icon}
      {title}
    </div>
  );
};

export default Card;
