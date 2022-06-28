import css from "./NavBar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <div className={css.navBar}>
      <Link href={"#home"} passHref>
        <h4>Home</h4>
      </Link>
      <Link href={"#aboutMe"} passHref>
        <h4 className={css.about}>About Me</h4>
      </Link>
      <Link href={"#skills"} passHref>
        <h4>Skills</h4>
      </Link>
      <Link href={"#projects"} passHref>
        <h4>Projects</h4>
      </Link>
      <Link href={"#contactMe"} passHref>
        <h4>Contact Me</h4>
      </Link>
    </div>
  );
}

export default Navbar;
