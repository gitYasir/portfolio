import { useState } from "react";
import Project from "./Project";
import css from "./Projects.module.scss";
import data from "./ProjectsData";
import Modal from "../Modal/Modal";

function Projects() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  function changeModal() {
    setModal(!modal);
  }
  function setDataForModal(item) {
    setModalData(item);
  }
  return (
    <>
      {modal && <Modal onClick={changeModal} data={modalData} />}
      <div className={css.mainContainer} id={"projects"}>
        <div className={css.subContainer}>
          <div className={css.title}>
            <h3>Projects</h3>
          </div>
          <div className={css.projectsArea}>
            {data.map((project) => {
              return (
                <div
                  className={css.projectsArea}
                  key={Math.random()}
                  onClick={() => {
                    changeModal();
                    setDataForModal(project);
                  }}
                >
                  <p className={css.pName}>{project.projectName}</p>
                  <Project
                    pic={project.screenShot}
                    name={project.projectName}
                    live={project.linkToLive}
                    code={project.linkToCode}
                    techStack={project.techStack}
                  />
                </div>
              );
            })}
            <Project text="Coming soon... " />
            <Project text="Coming soon... " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
