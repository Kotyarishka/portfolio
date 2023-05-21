import Image from "next/image"

import FillerImage from "./filler.svg"

import { Heading } from "@/lib/components/Heading"

import styles from "./skills.module.css"
import { Skill, SkillGroup } from "@/lib/components/Skill"
import { Button } from "@/lib/components/Button"

export const Skills = () => {
    return (
        <>
            <Heading text={"skills/coolest"} />

            <div className={styles.grid}>
                <Image src={FillerImage} alt="" />
                <div className={styles.skills}>
                    <div>
                        <SkillGroup groupName={"Languages"}>
                            <Skill skillText={"JavaScript"} />
                            <Skill skillText={"TypeScript"} />
                            <Skill skillText={"Lua"} />
                            <Skill skillText={"Bash"} />
                            <Skill skillText={"PHP"} />
                            <Skill skillText={"C#"} />
                            <Skill skillText={"SQL"} />
                        </SkillGroup>
                    </div>
                    <div>
                        <SkillGroup groupName={"Databases"}>
                            <Skill skillText={"SQLite"} />
                            <Skill skillText={"MariaDB"} />
                            <Skill skillText={"PostgreSQL"} />
                            <Skill skillText={"MongoDB"} />
                        </SkillGroup>
                        <SkillGroup groupName={"Other"}>
                            <Skill skillText={"HTML"} />
                            <Skill skillText={"CSS"} />
                            <Skill skillText={"SCSS"} />
                            <Skill skillText={"EJS"} />
                            <Skill skillText={"Pug"} />
                            <Skill skillText={"REST"} />
                        </SkillGroup>
                    </div>
                    <div>
                        <SkillGroup groupName={"Tools"}>
                            <Skill skillText={"VSCode"} />
                            <Skill skillText={"Figma"} />
                            <Skill skillText={"Photoshop"} />
                            <Skill skillText={"Illustrator"} />
                            <Skill skillText={"Git"} />
                            <Skill skillText={"GitHub Actions"} />
                            <Skill skillText={"FontAwesome"} />
                        </SkillGroup>
                        <SkillGroup groupName={"Frameworks"}>
                            <Skill skillText={"React"} />
                            <Skill skillText={"Next.js"} />
                            <Skill skillText={"Express.js"} />
                            <Skill skillText={"Discord.js"} />
                            <Skill skillText={"Templier"} />
                            <Skill skillText={"LDoc"} />
                        </SkillGroup>
                    </div>
                </div>
            </div>
        </>
    )
}