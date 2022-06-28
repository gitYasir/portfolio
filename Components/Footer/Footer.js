import css from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={css.container}>
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
      <h5>Site developed by Yasir Ibrahim using Next.js</h5>
    </div>
  );
}

export default Footer;
