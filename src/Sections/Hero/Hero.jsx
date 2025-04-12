import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import telegramLight from "../../assets/telegram-light.svg";
import telegramDark from "../../assets/telegram-dark.svg";
import CV from "../../assets/Natnael Fesseha CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const telegramIcon = theme === "light" ? telegramLight : telegramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />

        <img
          src={heroImg}
          className={styles.hero}
          alt="profic pic of natnael alem"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Natnael
          <br />
          Alem
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://x.com/NatnaelAlem6" target="_blank">
            <img src={twitterIcon} alt="gwitter icon" />
          </a>
          <a href="https://t.me/natty204" target="_blank">
            <img src={telegramIcon} alt="telegram icon" />
          </a>
          <a href="https://github.com/Natnael1alem" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/natnael-alem-4b41a0329/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
