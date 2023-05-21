import { Heading } from "@/lib/components/Heading";
import { Project } from "@/lib/components/Project";
import { Button } from "@/lib/components/Button";

import LoadingScreen1 from "./imgs/loading_screen_1.png";
import Terminal from "./imgs/terminal.png";
import GamemodeCharSys from "./imgs/gamemode.jpg";

import styles from "./projects.module.css"

export const Projects = () => {
  return (
    <>
      <Heading text="projects/recent"/>
      <div className={styles.projects}>
        <Project
          image={Terminal}
          title={"Terminal"}
          description={
            "Custom utility library. Comes with pre-build UI components."
          }
          techStack={["Lua", "Font Awesome"]}
          githubLink={"https://github.com/MULTIVERSE-Project/terminal"}
        />
        <Project
          image={LoadingScreen1}
          title={"Loading Screen"}
          description={
            "Loading screen for GMod server called The Highest Republic."
          }
          techStack={["HTML", "CSS", "JavaScript"]}
        />
        <Project
          image={GamemodeCharSys}
          title={"Character System"}
          description={"Custom character system, for custom GMod gamemode."}
          techStack={["Lua", "MySQL"]}
        />
      </div>
      
      <Button linkTo={"/projects"} rightIcon={<span>~~&#62;</span>}>
        View all
      </Button>
    </>
  );
};
