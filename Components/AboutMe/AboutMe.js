import css from "./AboutMe.module.scss";
import Image from "next/image";
import myPic from "../../public/myPic.jpeg";
function AboutMe() {
  return (
    <section className={css.aboutMeSec}>
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
      <div>About me</div>
      <div>Contact</div>
      <div>CV</div>
    </section>
  );
}

export default AboutMe;
