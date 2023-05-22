import { Heading, PageHeading } from "@/lib/components/Heading";

import { Project } from "@/lib/components/Project";

import styles from "./page.module.css";

/* gmod */
import Terminal from "@/lib/imgs/terminal.png";
import Radio2 from "@/lib/imgs/radio.jpg";
import PerfectHands from "@/lib/imgs/perfect_hands.png";

import GamemodeCharSys from "@/lib/imgs/gamemode.jpg";
import GamemodeContext from "@/lib/imgs/gamemode_context.jpg";
import GamemodeRadio from "@/lib/imgs/gamemode_radio.jpg";
import GamemodeScoreboard from "@/lib/imgs/scoreboard.jpg";
import GamemodeScoreboard2 from "@/lib/imgs/scoreboard_2.jpg";

/* web */
import LoadingScreenTSB from "@/lib/imgs/loading_screen_tsb.png";
import LoadingScreenTHR from "@/lib/imgs/loading_screen_thr.png";
import LoadingScreenDG from "@/lib/imgs/loading_screen_dg.png";

export default function Home() {
  return (
    <main className={styles.projectsContent}>
      <div className={["container", styles.projectsHeader].join(" ")}>
        <PageHeading text={"projects"} />
        <p>Projects, that I worked on.</p>
      </div>
      <div className="container">
        <Heading text={"gmod"} />
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
            image={Radio2}
            title={"Custom radio"}
            description={
              "Custom radio system, themed for StarWarsRP server. Was commissioned."
            }
            techStack={["Lua", "Illustrator"]}
          />
          <Project
            image={PerfectHands}
            title={"Perfect Hands"}
            description={
              "Premium script for easy interaction with world around player, and animation system."
            }
            techStack={["Lua"]}
            buyLink={"https://mvp.tebex.io/package/5308190"}
            videoLink={"https://www.youtube.com/watch?v=zMhU5ot4o24"}
          />
        </div>
      </div>
      <div className="container">
        <Heading text={"gmod/custom gamemode"} />
        <div className={styles.projects}>
          <Project
            image={GamemodeCharSys}
            title={"Character System"}
            description={"Custom character system, for custom GMod gamemode."}
            techStack={["Lua", "MySQL"]}
          />
          <Project
            image={GamemodeContext}
            title={"Context menu"}
            description={
              "Custom context menu, for custom GMod gamemode. Comes with integration with diffrent scripts."
            }
            techStack={["Lua"]}
          />
          <Project
            image={GamemodeRadio}
            title={"Gamemode Radio"}
            description={
              "Custom radio system, themed for StarWarsRP server with custom GMod gamemode."
            }
            techStack={["Lua", "Illustrator"]}
          />
          <Project
            image={GamemodeScoreboard}
            title={"Scoreboard ~ I"}
            description={
              "Custom scoreboard, themed for StarWarsRP server with custom GMod gamemode."
            }
            techStack={["Lua"]}
          />
          <Project
            image={GamemodeScoreboard2}
            title={"Scoreboard ~ II"}
            description={
              "Custom scoreboard, themed for StarWarsRP server with custom GMod gamemode. Second variation."
            }
            techStack={["Lua"]}
          />
        </div>
      </div>
      <div className="container">
        <Heading text={"web"} />
        <div className={styles.projects}>
          <Project
            image={LoadingScreenTSB}
            title={"Loading Screen ~ TSB"}
            description={
              "Loading screen for GMod server called The Strongest Batch."
            }
            techStack={["HTML", "CSS", "JavaScript"]}
            viewLink={"https://tsb-loading-screen.vercel.app/"}
          />
          <Project
            image={LoadingScreenTHR}
            title={"Loading Screen ~ THR"}
            description={
              "Loading screen for GMod server called The Highest Republic."
            }
            techStack={["HTML", "CSS", "JavaScript"]}
          />
          <Project
            image={LoadingScreenDG}
            title={"Loading Screen ~ DG"}
            description={"Loading screen for GMod server called Devil Gaming."}
            techStack={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "/ Kotyarishka | projects 🍕",
  description: "",
};
