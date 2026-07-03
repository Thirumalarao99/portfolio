import "../App.css"

function Projects() {
  return (
    <section className="page" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          Projects
        </h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Student Dashboard</h3>
          <p>React CRUD Project</p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Modern UI Design</p>
        </div>

        <div className="project-card">
          <h3>Modal UI</h3>
          
        </div>
      </div>
    </section>
  );
  
}

export default Projects;