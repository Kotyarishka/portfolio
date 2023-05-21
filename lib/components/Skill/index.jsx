import styles from "./skill.module.css"

export const SkillGroup = ({children, groupName}) => {
    return <div className={styles.skillGroup}>
        <p>{groupName}</p>
        <div>{children}</div>
    </div>
}

export const Skill = ({skillText}) => {
    return <span className={styles.skill}>
        {skillText}
    </span>
}