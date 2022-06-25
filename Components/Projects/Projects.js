import css from "./Projects.module.scss";
import data from "./ProjectsData";
import ProjectCards from "./projectCards";

function Projects() {
  return (
    <div className={css.projectsContainer}>
      <div className={css.subContainer}>
        <div className={css.title}>
          <h3>Projects</h3>
        </div>
        {data.map((project) => {
          return (
            <ProjectCards
              key={Math.random()}
              name={project.projectName}
              pic={project.screenShot}
              live={project.linkToLive}
              code={project.linkToCode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
