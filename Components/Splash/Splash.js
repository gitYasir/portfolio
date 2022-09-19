import css from "./Splash.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

function Splash() {
  return (
    <div className={css.splash} id={"home"}>
      <Image
        src={"/sky.jpg"}
        alt={"background image"}
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"center"}
        priority
      />
      <div className={css.info}>
        <h3>
          HI, MY NAME IS YASIR IBRAHIM. I AM A HARD WORKING, ADAPTABLE AND
          AMBITIOUS WEB DEVELOPER LOOKING FOR AN ENTRY-LEVEL ROLE AS A FRONTEND
          OR BACKEND DEVELOPER.
        </h3>
        <div className={css.extLinks}>
          <Link href={"https://www.linkedin.com/in/yasir-ibrahim/"}>
            <a target="_blank" aria-label="Linked In">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ width: "40px", height: "40px" }}
                className={css.icon}
              />
            </a>
          </Link>
          <Link href={"https://github.com/gitYasir"}>
            <a target="_blank" aria-label="GitHub">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: "40px", height: "40px" }}
                className={css.icon}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;
