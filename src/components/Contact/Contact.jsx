import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../language/LanguageContext";
import { contactData } from "../../data/contactData";

export const Contact = () => {
  const { language } = useLanguage(); 
  const currentContactData = contactData[language] || contactData.EN; // Varsayılan dil EN

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{currentContactData.header}</h2>
        <p>{currentContactData.description}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href={`mailto:senanurrincekara@email.com?subject=${encodeURIComponent(currentContactData.emailSubject)}&body=${encodeURIComponent(currentContactData.emailBody)}`}
          >
            senanurrincekara@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/senanur-incekara-34bba8237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/senanurincekara
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/senanurincekara"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/senanurincekara
          </a>
        </li>
      </ul>
    </footer>
  );
};
