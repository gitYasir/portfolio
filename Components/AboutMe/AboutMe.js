import css from "./AboutMe.module.scss";
import Image from "next/image";
import myPic from "../../public/myPic.jpeg";
function AboutMe() {
  return (
    <section className={css.aboutMeSec}>
      <div className={css.textArea}>
        <div className={css.picContainer}>
          <Image
            src={myPic}
            alt={"Yasir Ibrahim"}
            className={css.pic}
            height={150}
            width={170}
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
        <div>Contact</div>
        <div>CV</div>
      </div>
    </section>
  );
}

export default AboutMe;
