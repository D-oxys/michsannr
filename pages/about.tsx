import React from "react";
import Header from "./Component/header";
import Footer from "./Component/footer";
import Heros from "./Component/about/aboutHero";
import AboutWork from "./Component/about/aboutwork";
import AboutSkill from "./Component/about/aboutSkill";

function about() {
  return (
    <>
      <div className="heroBack flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <Heros />
        </div>
      </div>
      <div className="bg-[#F7F7F7] px-4 text-slate-900 md:px-20">
        <AboutWork />
      </div>
      <div className="bg-[#F7F7F7] px-4 py-20 text-slate-900 md:px-20">
        <AboutSkill />
      </div>
      <Footer />
    </>
  );
}

export default about;
