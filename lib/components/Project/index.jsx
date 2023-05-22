import Image from "next/image";
import styles from "./project.module.css";
import { Button } from "../Button";

import { RiEyeFill, RiBook2Fill, RiGithubFill } from "react-icons/ri";
import { AiFillEye, AiFillShopping } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export const Project = ({
  image,
  techStack,
  title,
  description,
  viewLink,
  githubLink,
  buyLink,
  videoLink
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.images}>
        <Image src={image} alt="" />
        <Image src={image} alt="project showcase image" />
      </div>
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

        {(viewLink || githubLink || buyLink) && (
          <div className={styles.buttons}>
            
            {viewLink && (
              <Button linkTo={viewLink} rightIcon={<AiFillEye />}>
                Live
              </Button>
            )}
            {videoLink && (
              <Button linkTo={videoLink} rightIcon={<FaYoutube />}>
                Showcase
              </Button>
            )}
            {buyLink && (
              <Button linkTo={buyLink} rightIcon={<AiFillShopping />}>
                Buy
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
