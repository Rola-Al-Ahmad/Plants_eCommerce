import React from "react";

import About from "./components/About";
import Banners from "./components/Banners";
import Hero from "./components/Hero";
import ParallexBanner from "./components/ParallexBanner";
import Product from "./components/Product";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Blogs from "./components/Blogs";
import Brands from "./components/Brands";

import "./components/Home.css";

const Index = () => {
  return (
    <>
      <Hero />
      <Services />
      <Banners />
      <Product />
      <About />
      <ParallexBanner />
      <Product populer={true} />
      <Banners cms={true} />
      <Product topRated={true} />
      <Testimonial />
      <Blogs />
      <Brands />
    </>
  );
};

export default React.memo(Index);
