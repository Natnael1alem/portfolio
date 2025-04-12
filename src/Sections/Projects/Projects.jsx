import styles from "./ProjectsStyles.module.css";
import notep from "../../assets/notep.webp";
import carp from '../../assets/carp.png';
import expp from '../../assets/expp.png';
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    // 
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>

      {/* {styles.projectsContainer} */}
      <div className="flex flex-col items-center gap-8">
        <ProjectCard
          src={notep}
          link="https://github.com/Natnael1alem/Notes-WebApp"
          h3="Note Taking Website Application"
          p="Node and EJS based Note taking web application, that include user authentication, and mongo Database"
        />

        <ProjectCard
          src={carp}
          link="https://github.com/Natnael1alem/Car-Dealership-Service-Management-System"
          h3="Car Dealership Service Management System"
          p="A Java car dealership system for sales, services, maintenance, insurance, and inventory management with MySQL and JavaFX integration."
       />

        <ProjectCard
          src={expp}
          link="https://github.com/Natnael1alem/expense_tracker_app"
          h3="Expense Tracker Mobile App"
          p="Expense Tracker Mobile App, developed with flutter that run locally"
        />
      </div>
    </section>
  );
}

export default Projects;
