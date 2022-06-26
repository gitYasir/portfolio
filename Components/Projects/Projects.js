import css from "./Projects.module.scss";
import data from "./ProjectsData";
import ProjectCards from "./ProjectCards";
import { Grid } from "@nextui-org/react";
import picc from "../../public/Icons/auth0-svgrepo-com.svg";

function Projects() {
  return (
    <div className={css.mainContainer}>
      <div className={css.subContainer}>
        <div className={css.title}>
          <h3>Projects</h3>
          <img src={picc} />
        </div>
        <div className={css.projectsContainer}>
          <div>
            <Grid.Container gap={2} justify="center">
              {data.map((project) => {
                return (
                  <Grid key={Math.random()} xs={12} md={6}>
                    <ProjectCards
                      key={Math.random()}
                      name={project.projectName}
                      pic={project.screenShot}
                      live={project.linkToLive}
                      code={project.linkToCode}
                    />
                  </Grid>
                );
              })}
            </Grid.Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
