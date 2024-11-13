"use client";

import Container from "@/components/ui/Container";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import ContactFrom from "./ContactFrom";
import ContactMeCard from "./ContactMeCard";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 0,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", bounce: 0.5 },
  },
};

const ContactMe = () => {
  const view = useRef(null);

  const inView = useInView(view);
  return (
    <div className="py-20 mt-20 mb-20">
      <div className="my-10 flex justify-center items-center flex-col">
        <h1 className="text-5xl sm:text-6xl mb-2 font-bold place-items-start text-base-color/10">
          Contact
        </h1>
        <p className="text-secondary-color font-bold mb-3 text-2xl sm:text-3xl  -mt-12 sm:-mt-[54px]">
          Connect With Me!
        </p>
        <div className="w-48 h-1 bg-base-color rounded mx-auto"></div>
      </div>
      <Container>
        <motion.div
          variants={intro}
          ref={view}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          <motion.div variants={introChildren}>
            <ContactMeCard />
          </motion.div>
          <motion.div variants={introChildren}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-5 font-bold place-items-start text-base-color">
              Get In Touch
            </h1>
          </motion.div>
          <motion.div variants={introChildren}>
            <ContactFrom />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactMe;
