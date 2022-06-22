import css from "./Splash.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Splash() {
  return (
    <div className={css.splash}>
      <div className={css.info}>
        <h3>
          HI, MY NAME IS YASIR IBRAHIM. I AM A HARD WORKING AND AMBITIOUS WEB
          DEVELOPER LOOKING FOR AN ENTRY-LEVEL ROLE AS A FRONTEND OR BACKEND
          DEVELOPER.
        </h3>
        <div className={css.extLinks}>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{ width: "40px", height: "40px" }}
            className={css.icon}
          />
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "40px", height: "40px" }}
            className={css.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Splash;
