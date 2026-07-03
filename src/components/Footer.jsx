import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-slate-700">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Thiru<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Frontend Developer passionate about building
              responsive, scalable and user-friendly web
              applications using React and modern web
              technologies.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#resume" className="hover:text-blue-400 transition">
                  Resume
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-400 mb-6">
              Let's connect and build something amazing together.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/Thirumalarao99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex justify-center items-center transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex justify-center items-center transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com/thiru.goud30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-pink-500 flex justify-center items-center transition"
              >
                <FaInstagram size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Uppala Thirumalarao.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>

          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex justify-center items-center transition"
          >
            <FaArrowUp className="text-white" />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;