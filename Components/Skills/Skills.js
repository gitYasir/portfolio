import css from "./Skills.module.scss";
import skillsIcons from "./SkillsIconsDB";
import Image from "next/image";
import SkillBar from "react-skillbars";
import softSkills from "./Barskills";
function Skills() {
  return (
    <section className={css.mainContainer}>
      <div className={css.techSkills}>
        <div className={css.titleArea}>
          <h3 className={css.title}>Skills & Technologies</h3>
        </div>
        <div className={css.skills}>
          {skillsIcons.map((icon) => {
            return (
              <div key={Math.random()} className={css.iconContainer}>
                <div className={css.iconArea}>
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    className={css.icon}
                    layout="fill"
                  />
                </div>
                <h5>{icon.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className={css.softSkills}>
        <div className={css.titleArea}>
          <h3>Soft Skills</h3>
        </div>
        <div className={css.barArea}>
          <SkillBar skills={softSkills} height={"40px"} animationDelay={300} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
