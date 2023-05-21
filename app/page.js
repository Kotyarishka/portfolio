import Link from "next/link";

import { Hero } from "@/lib/blocks/Hero";
import { Quote } from "@/lib/components/Quote";

import { RiExternalLinkFill } from "react-icons/ri";

import styles from "./page.module.css";
import { Projects } from "@/lib/blocks/Projects";
import { Skills } from "@/lib/blocks/Skills";
import { About } from "@/lib/blocks/About";
import { Contacts } from "@/lib/blocks/Contacts";

export default function Home() {
  return (
    <main>
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

      <div className="page-content">
        <div className="container">
          <Projects />
        </div>

        <div className="container">
          <Skills />
        </div>

        <div className="container">
          <About />
        </div>

        <div className="container">
          <Contacts />
        </div>
      </div>
    </main>
  );
}
