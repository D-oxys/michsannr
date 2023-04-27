import React from "react";
import Header from "./Component/header";
import Footer from "./Component/footer";
import Product from "./Component/product";
import ProductHeros from "./Component/productHeros";

function productPage() {
  return (
    <>
      <div className="w-full bg-[#F7F7F7]">
        <Header />
      </div>
      <div className="bg-[#1C2863]">
        <div className="px-20 py-16">
          <h3 className="text-4xl font-bold text-white">Product</h3>
        </div>
      </div>
      <div className="">
        <ProductHeros />
      </div>
      <div className="bg-[#F7F7F7] pt-20">
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default productPage;
