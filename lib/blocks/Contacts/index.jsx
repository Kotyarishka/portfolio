import { Heading } from "@/lib/components/Heading";

import styles from "./contacts.module.css";
import { Contact, ContactGroup } from "@/lib/components/Contact";

import { FaDev, FaDiscord, FaEnvelope, FaInstagram, FaTelegram } from "react-icons/fa";

export const Contacts = () => {
  return (
    <>
      <Heading text={"contacts"} />

      <div className={styles.grid}>
        <div className={styles.infos}>
          <p>
            I&apos;m interested in freelance opportunities. 
          </p>
          <p>However, if you have
            other request or question, don’t hesitate to contact me</p>
        </div>
        <div className={styles.contacts}>
        <div>
            <ContactGroup groupName={"Convinient"}>
              <Contact
                contactText={"kotyarishka@gmail.com"}
                contactIcon={<FaEnvelope />}
                link={"mailto:kotyarishka@gmail.com"}
              />
            </ContactGroup>
          </div>
          <div>
            <ContactGroup groupName={"Messengers"}>
              <Contact
                contactText={"[̲̅К][̲̅о][̲̅т]#9652"}
                contactIcon={<FaDiscord />}
                link={"https://discord.com/users/332618875684519946"}
              />
              <Contact
                contactText={"@kotyarishka"}
                contactIcon={<FaTelegram />}
                link={"https://t.me/kotyarishka"}
              />
            </ContactGroup>
            <ContactGroup groupName={"Social"}>
              <Contact
                contactText={"@kotyarishka_sk8"}
                contactIcon={<FaInstagram />}
                link={"https://www.instagram.com/kotyarishka_sk8/"}
              />
              <Contact
                contactText={"dev.to/kotyarishka"}
                contactIcon={<FaDev />}
                link={"https://dev.to/kotyarishka"}
              />
            </ContactGroup>
          </div>
          
        </div>
      </div>
    </>
  );
};
