import React from "react";
import CardSlideshow from "../Component/cardslideshow";

function testimonial() {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam ut eum doloribus itaque.",
      link: "Andi",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione consequuntur id saepe veritatis amet!",
      link: "Bambang",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      link: "Rina",
    },
  ];
  return (
    <>
      <div>
        <div className="px-4 md:px-20">
          <h2 className="text-center text-2xl font-semibold tracking-wider text-blue-600">Testimonials</h2>
          <h2 className="mb-10 mt-4 text-center text-4xl font-semibold leading-tight text-black md:text-[64px]">
            What people say <br /> about me?
          </h2>
          <p></p>
          <CardSlideshow cards={cards} />
        </div>
      </div>
    </>
  );
}

export default testimonial;
