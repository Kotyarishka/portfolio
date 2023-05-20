"use client"

import Image from "next/image";
import styles from "./hero.module.css"

import MeBackgroundImage from "./meBackground.svg"
import MeImage from "./me.png"
import { Button } from "../Button";

export const Hero = () => {
    return (
        <div className={["container", styles.hero].join(" ")}>
            <div className={styles.info}>
                <h1 className={styles.header}>
                    Hi there, I'm <span>Danylo</span>.<br />
                    I am a <span>full-stack</span> developer.
                </h1>
                <h2 className={styles.subheader}>
                    I work with cutting edge technology and look forward to continuing to work on my startup.
                </h2>
                <div className={styles.buttons}>
                    <Button linkTo={"/projects"}>Check my work</Button>
                    <Button linkTo={"#"} style="secondary">Join me on my journey</Button>
                </div>
            </div>
            <div className={styles.photoSection}>
                <div className={
                    styles.photo
                }>
                    <Image src={MeBackgroundImage} alt="" />
                    <Image src={MeImage} alt=""/>
                </div>
                <div className={styles.workingOn}>
                    <span className={styles.rect}></span>
                    <span>
                        Currently working on <b>Portfolio</b>.
                    </span>
                </div>
            </div>
        </div>
    )
};
