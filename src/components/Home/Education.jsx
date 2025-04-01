"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import Revel from "../ui/Animation/Revel";
import Link from "next/link";

const records = [
  {
    title: "Master in Business Studies - MBS in Accounting",
    institute: "Khilgaon Model College",
    year: "2013",
    cgpa: "2nd Class",
    certificate: "",
  },
  {
    title: "Bachelor in Business Studies - BBS in Accounting",
    institute: "Habibullah Bahar College",
    year: "2012",
    cgpa: "2nd Class",
    certificate: "",
  },
  {
    title: "Higher Secondary Certificate - HSC in Business Studies",
    institute: "Khilgaon Model College",
    year: "2008",
    gpa: "3.4 out of 5",
    certificate: "",
  },
  {
    title: "Secondary School Certificate -SSC in Business Studies",
    institute: "Dharmarajika Orphanage Residential High School",
    year: "2008",
    gpa: "4.1 out of 5",
    certificate: "",
  },
];

const AcademicRecords = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="overflow-hidden py-14 sm:py-16 lg:py-20 bg-highlight-color"
    >
      <Container>
        <div className=" mt-10">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <Revel delay={0}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-secondary-color mb-7">
                Academic Records
              </h1>
            </Revel>
            <Revel delay={0}>
              <p className="text-sm lg:text-base xl:text-lg text-base-color w-full sm:w-[90%] lg:w-[80%]  xl:w-[80%] text-start">
                I have completed my academic education from different reputed
                institutions. Here are my academic records.
              </p>
            </Revel>
          </div>
          <div className="px-10 sm:ps-12 lg:ps-14 border-s border-secondary-color w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {records.map((item, index) => (
                <div key={index} className=" mb-10">
                  <Revel delay={0.1}>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color ">
                      {item.title}
                    </h2>
                  </Revel>
                  <ul className="text-sm lg:text-base  text-base-color w-full sm:w-[90%] lg:w-[80%]  xl:w-[80%] mt-3 text-start list-disc list-inside">
                    <Revel delay={0.2}>
                      <li className="list-disc list-inside space-y-2">
                        Institute: {item.institute}
                      </li>{" "}
                    </Revel>
                    <Revel delay={0.2}>
                      <li className="list-disc list-inside space-y-2">
                        Year: {item.year}
                      </li>
                    </Revel>
                    <Revel delay={0.2}>
                      <li className="list-disc list-inside space-y-2">
                        {item.cgpa ? `CGPA: ${item.cgpa}` : `GPA: ${item.gpa}`}
                      </li>
                    </Revel>
                  </ul>
                  <Revel delay={0.2}>
                    <div className=" mt-2 ">
                      <Link
                        href={item.certificate}
                        target={"_blank"}
                        className="hover:underline  px-1"
                      >
                        View certificate
                      </Link>
                    </div>
                  </Revel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default AcademicRecords;
