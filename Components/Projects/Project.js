import Image from "next/image";
import React from "react";
import css from "./Projects.module.scss";
import picc from "../../public/projects/finalProject1.jpg";

function Project({ pic, name, live, code, description }) {
  return (
    <div className={css.projectCard}>
      <div className={css.textAndLinkArea}>
        <ul>
          <li>bullet point </li>
          <li>bullet point </li>
          <li>bullet point </li>
          <li>bullet point </li>
          <li>bullet point </li>
          <li>bullet point </li>
        </ul>
        <div className={css.btn}>
          <button>Live</button>
          <button>code</button>
        </div>
      </div>
      <div className={css.picArea}>
        <Image src={picc} alt="" layout="fill" className={css.screenShot} />
      </div>
    </div>
  );
}

export default Project;
