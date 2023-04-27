import React from "react";
import Header from "./Component/header";
import Footer from "./Component/footer";
import ProjectsPic from "./Component/projectsPic";

function projects() {
  return (
    <>
      <div className="w-full bg-[#F7F7F7]">
        <Header />
      </div>
      <div className="bg-[#1C2863]">
        <div className="px-20 py-16">
          <h3 className="text-4xl font-bold text-white">Projects</h3>
        </div>
      </div>
      <div className="bg-[#F7F7F7]">
        <ProjectsPic />
      </div>
      <Footer />
    </>
  );
}

export default projects;
