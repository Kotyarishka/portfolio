import Image from "next/image";
import styles from "./project.module.css"
import { Button } from "../Button";

import {RiEyeFill, RiBook2Fill, RiGithubFill} from "react-icons/ri"

export const Project = ({
    image,
    techStack,
    title,
    description,
    docsLink,
    githubLink
}) => {
    return <div className={styles.project}>
        <Image src={image}/>
        <div className={styles.tech}>
            <span>
                Stack:
            </span>
            {techStack.map((tech, i) => <span>{tech + ((i == techStack.length - 1) ? "" : ", ")}</span>)}
        </div>
        <div className={styles.infos}>
            <h3 className={styles.header}>
                {title}
            </h3>
            <p className={styles.subheader}>
                {description}
            </p>

            <div className={styles.buttons}>
                <Button linkTo={"#"} rightIcon={<RiEyeFill />}>
                    View
                </Button>
                {docsLink && (
                    <Button linkTo={docsLink} rightIcon={<RiBook2Fill />} target="blank">Docs</Button>
                )}
                {githubLink && (
                    <Button linkTo={githubLink} rightIcon={<RiGithubFill />} target="blank">GitHub</Button>
                )}
            </div>
        </div>
    </div>
};