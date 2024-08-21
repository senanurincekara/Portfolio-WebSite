// src/components/Home/Home.jsx
import React from 'react';
import { useLanguage } from '../language/LanguageContext'; 
import styles from './Home.module.css';
import { getImageUrl } from '../../utils';

import cv from "../../data/cv.pdf" 
export const Home = () => {
    const { language } = useLanguage(); 

    const getText = () => {
        return language === 'EN' ? {
            title: "Hi, I am Sena",
            description: "I am a 4th year computer engineering student",
            downloadCv: "Download CV",
            githubAlt: "GitHub",
            linkedinAlt: "LinkedIn"
        } : {
            title: "Merhaba, Ben Sena",
            description: "Bilgisayar mühendisliği 4. sınıf öğrencisiyim",
            downloadCv: "CV İndir",
            githubAlt: "GitHub",
            linkedinAlt: "LinkedIn"
        };
    };

    const texts = getText();

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {texts.title}
                </h1>
                <p className={styles.description}>
                    {texts.description}
                </p>
                
                <div className={styles.btnContainer}>
                <a className={styles.downloadCvBtn} href={cv} download>
    {texts.downloadCv}
</a>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com/senanurincekara" target="_blank" rel="noopener noreferrer">
                            <img className={styles.socialIcon} src={getImageUrl("contact/githubIcon.png")} alt={texts.githubAlt} />
                        </a>
                        <a href="https://www.linkedin.com/in/senanur-incekara-34bba8237/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.socialIcon} src={getImageUrl("contact/linkedinIcon.png")} alt={texts.linkedinAlt} />
                        </a>
                    </div>
                </div>
            </div>
            <img className={styles.profileImg} src={getImageUrl("me/profile.jpg")} alt="My profile image" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
