import React from "react";
import { FooterBanner, HeroBanner, Product } from "../components";
function Home() {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Products of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
}

export default Home;
