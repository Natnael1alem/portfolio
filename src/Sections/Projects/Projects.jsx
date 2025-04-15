import styles from "./ProjectsStyles.module.css";
import notep from "../../assets/notep.webp";
import carp from '../../assets/carp.png';
import expp from '../../assets/expp.png';
import wotp from '../../assets/wotp.png';
import sp from '../../assets/s1.png';
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    // 
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>

      {/* {styles.projectsContainer} */}
      <div className="flex flex-col w-full items-center gap-8">
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

        <ProjectCard  
          src={sp}
          link="https://github.com/Natnael1alem/Amharic-Language-Information-Retrieval"
          h3="Amharic Search Engine"
          p="Amhraric Information Retrieval System built with python and Natural lanuage libraries"
        />

        <ProjectCard
          src={wotp}
          link="https://github.com/Natnael1alem/War-of-Tanks"
          h3="War of Tanks"
          p="Android video game made with Unity 3D, C# and android sdk, blender (for modeling & animating)"
        />
      </div>
    </section>
  );
}

export default Projects;
