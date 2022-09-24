import css from "./AboutMe.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function AboutMe() {
  return (
    <section className={css.aboutMeSec} id={"aboutMe"}>
      <Image
        src={"/desktop.jpg"}
        alt={"background image"}
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"center"}
        priority
      />
      <div className={css.textArea}>
        <div className={css.picContainer}>
          <Image
            src={"/myPic.jpeg"}
            alt={"Yasir Ibrahim"}
            className={css.pic}
            layout="fill"
            priority
          />
        </div>
        <div className={css.aboutMe}>
          <h3>About Me</h3>
          <p>
            I believe my time in both med school and the coding bootcamp show
            that I am a hard worker and that I do not leave things halfway done.
            I pick up skills fast and I can work well as part of any team I am
            with.
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
        <div className={css.downloadArea}>
          <a
            href="/prayer-timetable.jpg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prayer Timetable"
            download
          >
            <div className={css.cv}>
              <div className={css.download}>
                <div>
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ width: "30px", height: "30px" }}
                    className={css.downloadIcon}
                  />
                </div>
                <label>Download</label>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
