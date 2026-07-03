import React from "react";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaGraduationCap,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

import ProfileImage from "../assets/images/Hero.jpeg";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Resume
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            My Resume
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Here's a quick overview of my education, skills,
            projects and contact information.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Card */}

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <img
              src={ProfileImage}
              alt="Thirumalarao"
              className="w-30 h-40 rounded-full mx-auto border-4 border-blue-600 object-cover"
            />

            <h2 className="text-3xl font-bold mt-6">
              Uppala Thirumalarao
            </h2>

            <p className="text-blue-600 mt-2">
              Frontend Developer
            </p>

            <div className="flex justify-center gap-6 mt-8">

              <a
                href="https://github.com/Thirumalarao99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/thiru.goud30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

            </div>

            <a
              href="/Thiru-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
            >
              <FaDownload />

              Download Resume

            </a>

          </div>

          {/* Right */}

          <div className="lg:col-span-2 space-y-8">

            {/* Skills */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">

                <FaCode className="text-blue-600" />

                Skills

              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "ReactJS",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Node.js",
                  "REST API",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Education */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">

                <FaGraduationCap className="text-blue-600" />

                Education

              </h3>

              <div className="border-l-4 border-blue-600 pl-6">

                <h4 className="text-xl font-semibold">
                  Bachelor of Commerce (Computers)
                </h4>

                <p className="text-gray-500 mt-2">
                  Vikrama Simhapuri University
                </p>

                <p className="text-gray-400">
                  2023
                </p>

              </div>

            </div>

            {/* Projects */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">

                <FaFolderOpen className="text-blue-600" />

                Projects

              </h3>

              <ul className="space-y-5">

                <li>
                  <span className="font-semibold">
                    Student Management System
                  </span>

                  <p className="text-gray-500">
                    React CRUD Application
                  </p>
                </li>

                <li>
                  <span className="font-semibold">
                    Personal Portfolio
                  </span>

                  <p className="text-gray-500">
                    React + Tailwind CSS
                  </p>
                </li>

                <li>
                  <span className="font-semibold">
                    Instagram Clone
                  </span>

                  <p className="text-gray-500">
                    Responsive UI Design
                  </p>
                </li>

                <li>
                  <span className="font-semibold">
                    InnovatePERT
                  </span>

                  <p className="text-gray-500">
                    Project Management Application
                  </p>
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="flex items-center gap-3 text-2xl font-bold mb-4">

                <FaEnvelope className="text-blue-600" />

                Contact

              </h3>

              <p className="text-gray-600">
                📧 uppalathirumala8977@gmail.com
              </p>

              <p className="text-gray-600 mt-2">
                📍 Andhra Pradesh, India
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;