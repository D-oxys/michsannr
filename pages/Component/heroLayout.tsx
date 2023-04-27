import React from "react";
import Header from "../Component/header";
import Hero from "../Component/Hero";
import Serve from "../Component/serve";
import Portfolio from "../Component/portfolio";
import Product from "../Component/product";
import Testimonial from "../Component/testimonial";
import Contactme from "../Component/contactme";
import Footer from "../Component/footer";

function heroLayout() {
  return (
    <>
      <div className="heroBack flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <Hero />
        </div>
      </div>
      <div className="flex min-h-screen flex-col bg-[#F7F7F7]">
        <div className="bg-[#1c2863]">
          <Serve />
        </div>
      </div>
      <div className="flex flex-col bg-[#F7F7F7] py-20">
        <Portfolio />
      </div>
      <div className="bg-[#F7F7F7] py-20">
        <Product />
      </div>
      <div className="bg-[#F7F7F7] py-20">
        <Testimonial />
      </div>
      <div className="relative">
        <Contactme />
      </div>
      <Footer />
    </>
  );
}

export default heroLayout;
