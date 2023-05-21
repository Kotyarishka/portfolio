import Link from "next/link"
import styles from "./contact.module.css"

export const ContactGroup = ({children, groupName}) => {
    return <div className={styles.contactGroup}>
        <p>{groupName}</p>
        <div>{children}</div>
    </div>
}

export const Contact = ({contactText, contactIcon, link}) => {
    return <Link href={link} target="_blank" className={styles.contact}>
        {contactIcon} {contactText}
    </Link>
}