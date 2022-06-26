import Image from "next/image";
import React from "react";
import css from "./Projects.module.scss";
function Project({ pic, name, live, code, description }) {
  return (
    <div className={css.projectCard}>
      <div className={css.textAndLinkArea}>
        <p>text here</p>
        <button>Live</button>
        <button>code</button>
      </div>
      <div className={css.picArea}>
        <Image
          src={"/public/projects/finalProject1.jpg"}
          alt=""
          height={"100px"}
          width={"100px"}
        />
      </div>
    </div>
  );
}

export default Project;
