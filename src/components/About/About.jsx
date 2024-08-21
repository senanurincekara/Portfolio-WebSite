// src/components/About/About.jsx
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { aboutData } from "../../data/aboutData";
import { useLanguage } from "../language/LanguageContext";

export const About = () => {
    const { language } = useLanguage(); 
    const currentAboutData = aboutData[language]; 

    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>{language === 'EN' ? 'About Me' : 'Hakkımda'}</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    {currentAboutData.map((item, index) => (
                        <li key={index} className={styles.aboutItem}>
                            <img src={getImageUrl(item.img)} alt="profile" />
                            <div className={styles.aboutItemText}>
                                <h3>{item.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
