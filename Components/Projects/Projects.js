import Project from "./Project";
import css from "./Projects.module.scss";
import data from "./ProjectsData";
function Projects() {
  return (
    <div className={css.mainContainer} id={"projects"}>
      <div className={css.subContainer}>
        <div className={css.title}>
          <h3>Projects</h3>
        </div>
        <div className={css.projectsArea}>
          {data.map((project) => {
            return (
              <Project
                key={Math.random()}
                pic={project.screenShot}
                name={project.projectName}
                live={project.linkToLive}
                code={project.linkToCode}
                techStack={project.techStack}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
