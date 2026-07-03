import React from "react";
import {
  FaReact,
  FaLaptopCode,
  FaLayerGroup,
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaReact />,
    title: "Student Management System",
    description:
      "A React CRUD application for managing student records with a responsive user interface and REST API integration.",
    tech: ["React", "JavaScript", "REST API"],
    github: "https://github.com/Thirumalarao99",
  },
  {
    icon: <FaLaptopCode />,
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built using React and Tailwind CSS with smooth animations and clean UI.",
    tech: ["React", "Tailwind", "Responsive"],
    github: "https://github.com/Thirumalarao99",
  },
  {
    icon: <FaLayerGroup />,
    title: "Reusable Modal Components",
    description:
      "A reusable modal component library with customizable layouts and smooth animations.",
    tech: ["React", "Tailwind", "UI Components"],
    github: "https://github.com/Thirumalarao99",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            Here are some projects I've developed using React,
            JavaScript and modern frontend technologies.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 p-8 border border-gray-100"
            >

              {/* Icon */}

              <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-4xl mb-8 group-hover:rotate-12 transition duration-500">

                {project.icon}

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-slate-900">

                {project.title}

              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-7 mt-5">

                {project.description}

              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white hover:bg-black transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  View
                  <FaArrowRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;