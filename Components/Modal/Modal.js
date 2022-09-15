import Image from "next/image";
import Link from "next/link";
import css from "./Modal.module.scss";

function Modal({ onClick, data }) {
  return (
    <div className={css.modalContainer} onClick={onClick}>
      <div className={css.subContainer}>
        <div className={css.para}>
          <p>{data.reason}</p>
        </div>
        <div className={css.projectCard}>
          <div className={css.textAndLinkArea}>
            <h4>Tech Stack</h4>
            <div className={css.stack}>
              {data.techStack.map((tech) => {
                return <p key={Math.random()}>{tech}</p>;
              })}
            </div>
            <div className={css.btn}>
              <Link href={data.linkToLive}>
                <a target="_blank" rel="noopener noreferrer">
                  <button>Live</button>
                </a>
              </Link>
              <Link href={data.linkToCode}>
                <a target="_blank" rel="noopener noreferrer">
                  <button>Code</button>
                </a>
              </Link>
            </div>
          </div>
          <div className={css.picArea}>
            <Image
              src={data.screenShot}
              alt={data.projectName}
              layout="fill"
              className={css.screenShot}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
