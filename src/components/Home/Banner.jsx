"use client";

import React, { Suspense } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const intro = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 0,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};
const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#12103E",
  },
};

const Banner = () => {
  return (
    <div className=" bg-gradient-to-r from-[#E3F0FD]  to-[#FEF1EF] w-full min-h-[100vh] overflow-hidden flex flex-col items-center">
      <Container>
        <div className="py-16 lg:py-16">
          <div className="w-fit ml-[20%] hidden lg:block">
            <motion.svg
              width="100%"
              height="200"
              viewBox="0 0 507 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
                  fill: { delay: 2, duration: 0.3, ease: [1, 0, 0.8, 1] },
                }}
                d="M475.006 183.315C473.05 183.236 471.871 181.115 472.892 179.511L486.346 158.362C487.36 156.768 489.788 156.88 490.724 158.563L503.058 180.754C503.993 182.437 502.738 184.436 500.795 184.357L475.006 183.315Z"
                fill="#12103E"
                stroke="#12103E"
              />
              <motion.path
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M3.93194 195.324C31.9172 151.464 122.723 54.6616 156.491 122.028C186.301 181.499 37.8079 234.187 56.2373 105.289C74.6668 -23.6086 347.816 19.4448 483.79 176.678"
                stroke="#12103E"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeDasharray="8 8"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                }}
              />
            </motion.svg>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center justify-items-center w-full h-full  mt-5 lg:mt-0">
            <div>
              <motion.div variants={intro} initial="hidden" animate="visible">
                <motion.h1
                  variants={introChildren}
                  className="text-3xl lg:text-4xl xl:text-5xl text-base-color mb-3 md:mb-5"
                >
                  <span className="block md:inline-block"> I&apos;M</span>
                  <span className="text-base-color font-extrabold">
                    {" "}
                    Hassan Shahid
                  </span>
                </motion.h1>
                <motion.h3
                  variants={introChildren}
                  className="text-2xl lg:text-3xl text-base-color font-semibold mb-5 md:mb-10"
                >
                  I am a
                  <span className="text-base-color">
                    {" "}
                    <Typewriter
                      words={["SQA Engineer"]}
                      loop={100}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </motion.h3>
                <motion.p variants={introChildren} className="text-slate-700">
                  I’m a web developer, specifically a MERN Stack Developer. I
                  have a strong knowledge About HTML, CSS, JavaScript,
                  TypeScript, ReactJs, Redux, NextJS, NodeJS ExpressJS, MongoDB.
                  I am a capable and consistent problem-solver skilled at
                  prioritizing and managing projects with proficiency.
                </motion.p>
                <motion.div
                  variants={introChildren}
                  className="flex justify-start items-center gap-5 my-5"
                >
                  <Link href="https://github.com/rajin572/" target="_blank">
                    <FaGithub className="text-secondary-color cursor-pointer  text-2xl" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/din-islam-rajin/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-secondary-color cursor-pointer text-2xl" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/din.islam.rajin"
                    target="_blank"
                  >
                    <FaFacebook className="text-secondary-color cursor-pointer  text-2xl" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/dir_razin_572/"
                    target="_blank"
                  >
                    <FaInstagramSquare className="text-secondary-color cursor-pointer text-2xl" />
                  </Link>
                </motion.div>

                <motion.div variants={introChildren}>
                  {" "}
                  <Link
                    href="https://drive.google.com/file/d/113GzghW9Nxo6tJpTNNVq7st4czO-Q6g3/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="bg-transparent border-2 border-base-color px-4 py-2 rounded mt-5 text-base-color hover:bg-secondary-color hover:border-secondary-color hover:text-base-color duration-500">
                      My Resume
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 lg:mt-0  order-last"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,

                duration: 3,
              }}
            >
              <Suspense>
                <video
                  controls
                  controlsList="nodownload"
                  className=" w-full h-full rounded-lg shadow-md"
                >
                  <source src="/video/banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
