import Image from "next/image";
import React from "react";
import css from "./Projects.module.scss";

function Project({ pic, name, live, code, techStack }) {
  return (
    <div className={css.projectCard}>
      <div className={css.textAndLinkArea}>
        <h4>Tech Stack</h4>
        <div className={css.stack}>
          {techStack.map((tech) => {
            return <p key={Math.random()}>{tech}</p>;
          })}
        </div>
        <div className={css.btn}>
          <button>Live</button>
          <button>code</button>
        </div>
      </div>
      <div className={css.picArea}>
        <Image src={pic} alt={name} layout="fill" className={css.screenShot} />
      </div>
    </div>
  );
}

export default Project;
