import styles from "./heading.module.css"

export const Heading = ({ text }) => {
    return <h2 className={styles.heading}><span>#</span>{text}</h2>
};
