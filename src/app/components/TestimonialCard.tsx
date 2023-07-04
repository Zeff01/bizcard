import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface TestimonialCardProps {
  imageUrl: string;
  description: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  description,
  rating,
}) => {
  const filledStars = Array(rating).fill(<AiFillStar key={rating} size={30} />);
  const outlinedStars = Array(5 - rating).fill(
    <AiOutlineStar key={rating + 1} size={30} />
  );

  return (
    <div className="flex justify-center flex-col items-center  rounded-md gap-4 p-4">
      <Image
        src={imageUrl}
        alt="imageUrl"
        width={500}
        height={500}
        className="rounded-full w-32 h-32 overflow-hidden "
      />
      <div className="flex = ">
        {filledStars}
        {outlinedStars}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;
