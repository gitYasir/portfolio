import css from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <div className={css.container}>
      <div className={css.extLinks}>
        <Link href={"https://www.linkedin.com/in/yasir-ibrahim/"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ width: "40px", height: "40px" }}
              className={css.icon}
            />
          </a>
        </Link>
        <Link href={"https://github.com/gitYasir"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "40px", height: "40px" }}
              className={css.icon}
            />
          </a>
        </Link>
      </div>
      <h5>Site developed by Yasir Ibrahim using Next.js</h5>
    </div>
  );
}

export default Footer;
