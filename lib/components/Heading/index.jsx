import Link from "next/link";
import styles from "./heading.module.css";

export const Heading = ({ text, linkTo, linkText }) => {
    return (
    <div className={styles.heading}>
      <h2>
        <span>#</span>
        {text}
      </h2>
      {linkTo && <Link href={linkTo}>{linkText}</Link>}
    </div>
  );
};
