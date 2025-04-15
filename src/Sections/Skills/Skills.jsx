import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="PYTHON" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>

      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Unity C#" />
        <SkillList src={checkMarkIcon} skill="Blender" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaFX" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="GIT" />
      </div>

      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Phoenix Framework" />
        <SkillList src={checkMarkIcon} skill="Elixir" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="MYSQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
    </section>
  );
}

export default Skills;
