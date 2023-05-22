import { Heading } from "@/lib/components/Heading";
import { Project } from "@/lib/components/Project";
import { Button } from "@/lib/components/Button";

import LoadingScreenTSB from "@/lib/imgs/loading_screen_tsb.png";
import Terminal from "@/lib/imgs/terminal.png";
import GamemodeCharSys from "@/lib/imgs/gamemode.jpg";

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
          image={LoadingScreenTSB}
          title={"Loading Screen"}
          description={
            "Loading screen for GMod server called The Strongest Batch."
          }
          techStack={["HTML", "CSS", "JavaScript"]}

          viewLink={"https://tsb-loading-screen.vercel.app/"}
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
