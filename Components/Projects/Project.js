import Image from "next/image";
import Link from "next/link";
import React from "react";
import css from "./Projects.module.scss";

function Project({ pic, name, live, code, techStack, text }) {
  if ((pic, name, live, code, techStack)) {
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
            <Link href={live}>
              <a target="_blank" rel="noopener noreferrer">
                <button>Live</button>
              </a>
            </Link>
            <Link href={code}>
              <a target="_blank" rel="noopener noreferrer">
                <button>Code</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={css.picArea}>
          <Image
            src={pic}
            alt={name}
            layout="fill"
            className={css.screenShot}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${css.blurr}`}>
        <div className={css.textAndLinkArea}>
          <h4>Tech Stack</h4>
          <div className={css.stack}>
            <p>stack</p>;<p>stack</p>;<p>stack</p>;<p>stack</p>;
          </div>
          <div className={css.btn}>
            <button>Live</button>
            <button>Code</button>
          </div>
        </div>
        <h2 className={css.showtext}>{text}</h2>
        <div className={css.picArea}>
          <Image
            src="/projects/finalProject1.jpg"
            alt="temp"
            layout="fill"
            className={css.screenShot}
          />
        </div>
      </div>
    );
  }
}

export default Project;
