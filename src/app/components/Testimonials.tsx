import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl md:text-4xl text-center bg-gray-100 py-2">
        Testimonials
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <TestimonialCard
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOskKlNyI4IiHpGEbBDNUkj4-pwYB5SU-yig&usqp=CAU"
          description="     Iron Man was more than just a man in a suit; he was a beacon of
        innovation and bravery. From our first encounter, I knew Tony Stark was
        destined for greatness. His sacrifices and unwavering determination to
        protect those he loved set him apart."
          rating={5}
        />

        <TestimonialCard
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOskKlNyI4IiHpGEbBDNUkj4-pwYB5SU-yig&usqp=CAU"
          description="     Iron Man was more than just a man in a suit; he was a beacon of
        innovation and bravery. From our first encounter, I knew Tony Stark was
        destined for greatness. His sacrifices and unwavering determination to
        protect those he loved set him apart."
          rating={1}
        />
        <TestimonialCard
          imageUrl="https://i.pinimg.com/564x/5b/5e/c2/5b5ec2860bf5c599941d4b6afcd847e1.jpg"
          description="Reflecting on the heroic journey with Iron Man, admires Tony Stark's unwavering commitment to justice and protection. Despite their differences, he witnessed Tony's extraordinary courage and determination to make the world a better place."
          rating={3}
        />
      </div>
    </div>
  );
};

export default Testimonials;
