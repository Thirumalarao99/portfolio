import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="text-center">
            <FaHtml5 className="w-20 h-20 mx-auto mb-4 text-orange-600" />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              HTML
            </h3>
            <p className="text-sm text-secondary">
              Building structured web content
            </p>
          </div>

          {/* CSS */}
          <div className="text-center">
            <FaCss3Alt className="w-20 h-20 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              CSS
            </h3>
            <p className="text-sm text-secondary">
              Styling and layout for modern web designs
            </p>
          </div>

          {/* JavaScript */}
          <div className="text-center">
            <FaJs className="w-20 h-20 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              JavaScript
            </h3>
            <p className="text-sm text-secondary">
              Building interactive and dynamic web applications
            </p>
          </div>

          {/* React */}
          <div className="text-center">
            <FaReact className="w-20 h-20 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              React
            </h3>
            <p className="text-sm text-secondary">
              Building interactive UIs with state management
            </p>
          </div>

          {/* Node.js */}
          <div className="text-center">
            <FaNodeJs className="w-20 h-20 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Node.js
            </h3>
            <p className="text-sm text-secondary">
              Building scalable server-side applications
            </p>
          </div>


          {/* Git */}
          <div className="text-center">
            <FaGitAlt className="w-20 h-20 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
              Git
            </h3>
            <p className="text-sm text-secondary">
              Version control for collaborative software development
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skill;
