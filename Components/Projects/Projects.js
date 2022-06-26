import css from "./Projects.module.scss";
import data from "./ProjectsData";
function Projects() {
  return (
    <div className={css.mainContainer}>
      <div className={css.subContainer}>
        <div className={css.title}>
          <h3>Projects</h3>
        </div>
        <div className={css.projectsArea}></div>
      </div>
    </div>
  );
}

export default Projects;
