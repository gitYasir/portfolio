import css from "./AboutMe.module.scss";
import Image from "next/image";
import myPic from "../../public/myPic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function AboutMe() {
  return (
    <section className={css.aboutMeSec}>
      <div className={css.textArea}>
        <div className={css.picContainer}>
          <Image
            src={myPic}
            alt={"Yasir Ibrahim"}
            className={css.pic}
            layout="fill"
          />
        </div>
        <div className={css.aboutMe}>
          <h3>About Me</h3>
          <p>
            After 6 years of studying medicine in China, I realised my passion
            was actually in technology and building apps from scratch. I am
            looking for a junior developer role that will allow me to blend my
            creativity, programming & problem-solving skills.
          </p>
          {/* add a 'more' button that leads to a more in-depth about me */}
        </div>
        <div className={css.contactMe}>
          <h3>Contact Details</h3>
          <ul>
            <li>Email: Yasir.Ibrahim@hotmail.co.uk</li>
            <li>Number: 07742610978</li>
          </ul>
        </div>
        <div className={css.cv}>
          <div className={css.download}>
            <a
              href="/Yasir Ibrahim CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{ width: "30px", height: "30px" }}
                className={css.downloadIcon}
              />
              <label>Download CV</label>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
