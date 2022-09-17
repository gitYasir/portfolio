import css from "./NavBar.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [state, setState] = useState(false);
  function toggleMenu() {
    setState(!state);
  }
  return (
    <nav className={css.navBar}>
      <div className={css.logoArea}>
        <Link href={"/"}>
          <a>
            <Image
              src={"/myLogo.png"}
              alt={"My Logo"}
              layout={"fill"}
              className={css.myLogo}
            />
          </a>
        </Link>
      </div>
      <div
        className={state ? `${css.span} ${css.cross}` : css.span}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={state ? `${css.menu} ${css.active}` : css.menu}>
        <ul>
          <li>
            <Link href={"#home"} passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"#aboutMe"} passHref>
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href={"#skills"} passHref>
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href={"#projects"} passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href={"#contactMe"} passHref>
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
