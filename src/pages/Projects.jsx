import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="container">
      <div className="card">
        <h2>Projects</h2>

        <ProjectCard
          title="Project 1"
          text="I don’t have any projects yet, but I’m excited to start learning and creating soon. 1."
        />

        <ProjectCard
          title="Project 2"
          text="I don’t have any projects yet, but I’m excited to start learning and creating soon. 2."
        />
      </div>
    </div>
  );
}

export default Projects;
