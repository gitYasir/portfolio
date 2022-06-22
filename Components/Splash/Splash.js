import Image from "next/image";
import css from "./Splash.module.scss";
import linkedIn from "../../public/linkedin.svg";
import gitHub from "../../public/github.svg";

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
          <Image
            src={linkedIn}
            alt="LinkedIn Logo"
            height={50}
            width={50}
            className={css.icon}
          />
          <Image
            src={gitHub}
            alt="GitHub Logo"
            height={50}
            width={50}
            className={css.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Splash;
