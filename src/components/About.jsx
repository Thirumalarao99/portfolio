import React from "react";
import AboutImage from "../assets/images/Hero.jpeg";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          About Me
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden shadow-xl">
              <img
                src={AboutImage}
                alt="Thirumalarao - Frontend Developer"
                className="w-40 rounded-full h-45 object-cover border-4 border-primary"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3 md:px-8">
            <div className="text-[#333333]">
              <p className="mb-4 text-justify">
                Hi, I'm <strong>Uppala Thirumalarao</strong>, a passionate{" "}
                <strong>Frontend Developer</strong> with expertise in{" "}
                <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, 
                <strong>CSS</strong> and <strong>Node.js</strong>. I enjoy building modern, responsive, 
                and user-friendly web applications with clean UI designs and smooth user experiences.
              </p>
              <p className="mb-4 text-justify">
                My journey into web development started with <strong>HTML</strong>, and <strong>CSS</strong>, but my interest 
                truly grew when I discovered JavaScript and the power of React. Since then,
                I’ve been focused on creating interactive and scalable applications while continuously improving my frontend development skills.
              </p>
              <p className="mb-4 text-justify">
                I have worked on several projects, including a <strong>Student Management System</strong>,
                <strong>Instagram Web Page Clone</strong>,and reusable <strong>Modal UI Components</strong> Components using React. 
                Through these projects, I gained hands-on experience in component-based architecture, state management, responsive design, CRUD operations,
                and modern UI development practices.
              </p>
              <p className="text-justify ">
                Currently, I am focused on improving my frontend development skills by building
                responsive and interactive web applications using React. I enjoy creating modern UI components, 
                improving user experience, and writing clean, maintainable code. I’m always eager to learn new frontend technologies, 
                explore creative designs, and work on projects that solve real-world problems.
              </p>
              <p className="text-justify ">
                 Apart from coding, I enjoy exploring UI/UX trends, 
                 learning about SEO, organizing productive workspaces, 
                 and spending time on motorcycle rides and off-road adventures.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
