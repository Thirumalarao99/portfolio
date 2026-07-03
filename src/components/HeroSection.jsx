import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

import HomeImage from "../assets/images/Hero.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="text-blue-400 font-semibold text-lg mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              
             
              <span className="text-blue-600">
                Thirumalarao
              </span>
            </h1>

            <div className="mt-6 text-3xl font-semibold text-gray-700 h-12">

              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "JavaScript",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />

            </div>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

              Passionate React Developer creating responsive,
              scalable and modern web applications with
              beautiful UI and seamless user experience.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/Thiru-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-xl"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center gap-2"
              >
                Contact Me
                <FaArrowRight />
              </a>

            </div>

            {/* SOCIAL */}

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/Thirumalarao99"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com/thiru.goud30"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaInstagram size={22} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            {/* Background Circle */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-100 blur-3xl"></div>

            {/* Image */}

            <img
              src={HomeImage}
              alt="Thirumalarao"
              className="relative z-10 w-[350px] lg:w-[340px] h-[370px] lg:h-[500px] rounded-2xl border-8 border-white shadow-2xl hover:scale-105 transition duration-500"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;