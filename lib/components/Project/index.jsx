import Image from "next/image";
import styles from "./project.module.css";
import { Button } from "../Button";

import { RiEyeFill, RiBook2Fill, RiGithubFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

export const Project = ({
  image,
  techStack,
  title,
  description,
  viewLink,
  githubLink,
}) => {
  return (
    <div className={styles.project}>
      <Image src={image} alt="project showcase image" />
      <div className={styles.tech}>
        <span>Stack:</span>
        {techStack.map((tech, i) => (
          <span key={tech}>
            {tech + (i == techStack.length - 1 ? "" : ", ")}
          </span>
        ))}
      </div>
      <div className={styles.infos}>
        <h3 className={styles.header}>{title}</h3>
        <p className={styles.subheader}>{description}</p>

        {(viewLink || githubLink) && (
          <div className={styles.buttons}>
            {viewLink && (
              <Button linkTo={viewLink} rightIcon={<AiFillEye />}>
                Live
              </Button>
            )}
            {githubLink && (
              <Button
                linkTo={githubLink}
                rightIcon={<RiGithubFill />}
                target="blank"
              >
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
