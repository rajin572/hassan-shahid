import ContactMe from "@/components/ContactMe/ContactMe";
import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import RecentVlog from "@/components/Home/RecentVlog";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <RecentVlog />
      <Testimonial />
      <ContactMe />
      <div className="bg-gray-950 h-screen"></div>
    </div>
  );
};

export default page;
