import Link from "next/link";

import { Hero } from "@/lib/components/Hero";
import { Quote } from "@/lib/components/Quote";

import { RiExternalLinkFill } from "react-icons/ri";

import styles from "./page.module.css";
import { Heading } from "@/lib/components/Heading";
import { Project } from "@/lib/components/Project";

import LoadingScreen1 from "./imgs/loading_screen_1.png";
import Terminal from "./imgs/terminal.png";
import GamemodeCharSys from "./imgs/gamemode.jpg";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container">
        <Quote author={"SallyBot, 2023"}>
          <p>
            Encrypted communication is not as secure as unencrypted
            communication since enctyption can be broken with enough computing
            power.
          </p>
          <Link
            href={"https://youtu.be/KM4a7RGG270?t=63"}
            alt="source of the quote"
            className={styles.externalLink}
          >
            source <RiExternalLinkFill />
          </Link>
        </Quote>
      </div>

      <div className="container">
        <Heading text="projects/recent" />
        <div className={styles.projects}>
          <Project
            image={Terminal}
            title={"Terminal"}
            description={
              "Custom utility library. Comes with pre-build UI components."
            }
            techStack={["Lua", "FontAwesome"]}
            docsLink={"https://docs.multiverse-project.com/terminal"}
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
      </div>
    </>
  );
}
