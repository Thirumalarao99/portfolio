import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaProjectDiagram,
  FaReact,
} from "react-icons/fa";

import AboutImage from "../assets/images/Hero.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3 text-gray-900">
            Know Me Better
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-5"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-40"></div>

              <img
                src={AboutImage}
                alt="Thirumalarao"
                className="relative w-60 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
              />

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Frontend Developer
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              I'm <span className="font-semibold">Uppala Thirumalarao</span>,
              a passionate Frontend Developer specializing in
              <span className="text-blue-600 font-semibold"> React.js</span>,
              JavaScript, HTML, CSS, Tailwind CSS, and REST APIs.

              I enjoy transforming ideas into responsive,
              interactive, and user-friendly web applications
              using modern frontend technologies.
            </p>

            <p className="text-gray-600 leading-8 mb-10">
              My goal is to build applications that provide
              excellent user experiences while maintaining
              clean, scalable, and maintainable code.
              I continuously explore new technologies,
              UI trends, and best practices to improve
              my development skills.
            </p>

            {/* INFO */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-500">
                  Name
                </h4>

                <p className="mt-2 font-bold">
                  Uppala Thirumalarao
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-500">
                  Email
                </h4>

                <p className="mt-2 font-bold text-sm">
                  uppalathirumala8977@gmail.com
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-500">
                  Location
                </h4>

                <p className="mt-2 font-bold">
                  Andhra Pradesh, India
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-500">
                  Availability
                </h4>

                <p className="mt-2 font-bold text-green-600">
                  Open to Work
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* STATISTICS */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-24"
        >

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-3 transition duration-300">

            <FaLaptopCode className="text-5xl mx-auto text-blue-600" />

            <h2 className="text-4xl font-bold mt-5">
              10+
            </h2>

            <p className="text-gray-500 mt-2">
              Projects Completed
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-3 transition">

            <FaReact className="text-5xl mx-auto text-blue-500" />

            <h2 className="text-4xl font-bold mt-5">
              8+
            </h2>

            <p className="text-gray-500 mt-2">
              Technologies
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-3 transition">

            <FaProjectDiagram className="text-5xl mx-auto text-green-500" />

            <h2 className="text-4xl font-bold mt-5">
              100%
            </h2>

            <p className="text-gray-500 mt-2">
              Responsive Design
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-3 transition">

            <FaUserGraduate className="text-5xl mx-auto text-purple-500" />

            <h2 className="text-4xl font-bold mt-5">
              2023
            </h2>

            <p className="text-gray-500 mt-2">
              Graduate
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;