import React from "react";
import Header from "./Component/header";
import Footer from "./Component/footer";
import ProjectsPic from "./Component/projectsPic";
import Head from "next/head";

function projects() {
  return (
    <>
      <Head>
        <title>Ichsan - Project</title>
      </Head>
      <div className="w-full bg-[#F7F7F7]">
        <Header />
      </div>
      <div className="bg-[#1C2863]">
        <div className="px-4 py-16 md:px-20">
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
