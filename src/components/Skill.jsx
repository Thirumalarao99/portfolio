import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    level: 95,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    level: 90,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-5xl" />,
    level: 88,
  },
  {
    name: "React JS",
    icon: <FaReact className="text-cyan-500 text-5xl" />,
    level: 90,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
    level: 75,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    level: 92,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 text-5xl" />,
    level: 85,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-5xl" />,
    level: 90,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-black text-5xl" />,
    level: 90,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
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
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Technologies I Work With
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-5"></div>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <div className="flex items-center gap-5">

                {skill.icon}

                <div>

                  <h3 className="text-2xl font-bold">
                    {skill.name}
                  </h3>

                  <p className="text-gray-500">
                    {skill.level}% Proficiency
                  </p>

                </div>

              </div>

              {/* Progress */}

              <div className="mt-8">

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;