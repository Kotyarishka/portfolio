import { Heading, PageHeading } from "@/lib/components/Heading";
import styles from "./page.module.css";

import { Contacts } from "@/lib/blocks/Contacts";
import { Contact, ContactGroup } from "@/lib/components/Contact";

import {
  FaEnvelope,
  FaTelegram,
  FaInstagram,
  FaDev,
  FaDiscord,
} from "react-icons/fa";

const PricingRow = ({ name, price }) => {
  return (
    <div>
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>
        Starting at <span>{price}$</span>
      </span>
    </div>
  );
};

export default function ContactsPage() {
  return (
    <main className={styles.contactsContent}>
      <div className={["container", styles.contactsHeader].join(" ")}>
        <PageHeading text={"contacts"} />
        <p>How to contact me. And a brief pricing.</p>
      </div>
      <div className="container">
        <Heading text={"how to reach"} />
        <div className={styles.grid}>
          <ContactGroup groupName={"Convinient"}>
            <Contact
              contactText={"kotyarishka@gmail.com"}
              contactIcon={<FaEnvelope />}
              link={"mailto:kotyarishka@gmail.com"}
            />
          </ContactGroup>
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

      <div className="container">
        <Heading text={"pricing"} />
        <div className={styles.table}>
          <PricingRow name={"Custom HUD"} price={5} />
          <PricingRow name={"Custom DarkRP UI kit"} price={20} />
          <PricingRow name={"Premium script"} price={10} />
          <PricingRow name={"Build a website"} price={30} />
          <PricingRow name={"Build a Discord bot"} price={10} />
        </div>
      </div>
    </main>
  );
}
