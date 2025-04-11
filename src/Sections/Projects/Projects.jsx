import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Natnael1alem/Notes-WebApp"
          h3="Note Taking Website Application"
          p="Node and EJS based Note taking web application, that include user authentication, and mongo Database"
        />

        <ProjectCard
          src={freshBurger}
          link="https://github.com/Natnael1alem/Car-Dealership-Service-Management-System"
          h3="Car Dealership Service Management System"
          p="A Java car dealership system for sales, services, maintenance, insurance, and inventory management with MySQL and JavaFX integration."
       />

        <ProjectCard
          src={hipsster}
          link="https://github.com"
          h3="Hipsster"
          p="Glasses Shop"
        />

        <ProjectCard
          src={fitLift}
          link="https://github.com"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
