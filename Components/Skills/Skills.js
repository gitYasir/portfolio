import css from "./Skills.module.scss";
import ui from "../../public/Icons/nextUIIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  faJsSquare,
  faHtml5,
  faSass,
  faReact,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
function Skills() {
  return (
    <section className={css.mainContainer}>
      <div className={css.techSkills}>
        <div className={css.titleArea}>
          <h3 className={css.title}>Skills & Technologies</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
