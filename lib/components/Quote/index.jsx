import styles from "./quote.module.css";

import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri"

export const Quote = ({ children, author = "Unknown" }) => {
  return <div className={styles.quote}>
    <RiDoubleQuotesL className={styles.quoteL} />
    <RiDoubleQuotesR className={styles.quoteR} />
    {children}
    <p className={styles.author}><span>{author}</span></p>
  </div>;
};
