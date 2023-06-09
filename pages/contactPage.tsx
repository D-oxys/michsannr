import React from "react";
import Header from "./Component/header";
import Footer from "./Component/footer";
import Contactme from "./Component/contactme";
import Head from "next/head";

function contactPage() {
  return (
    <>
      <Head>
        <title>Ichsan - contact</title>
      </Head>
      <div className="bg-[#1C2863]">
        <div className="w-full bg-[#F7F7F7]">
          <Header />
        </div>
        <div className="bg-[#1C2863]">
          <div className="px-4 py-16 md:px-20">
            <h3 className="text-4xl font-bold text-white">Contact Me.</h3>
          </div>
        </div>
        <div className="relative ">
          <Contactme />
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default contactPage;
