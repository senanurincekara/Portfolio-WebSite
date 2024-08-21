// src/components/Navbar/Navbar.jsx
import React from 'react';
import { useLanguage } from '../language/LanguageContext'; 
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const { language, toggleLanguage } = useLanguage(); 

    const getText = () => {
        return language === 'EN' ? {
            about: "About",
            experience: "skills",
            projects: "Projects",
            contact: "Contact",
            portfolio: "Portfolio"
        } : {
            about: "Hakkında",
            experience: "yetenekler",
            projects: "Projeler",
            contact: "İletişim",
            portfolio: "Portföy"
        };
    };

    const texts = getText();

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">{texts.portfolio}</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={!menuOpen ? getImageUrl("nav/menuIcon.png") : getImageUrl("nav/closeIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">{texts.about}</a></li>
                    {/* <li><a href="#skills">{texts.experience}</a></li> */}
                    <li><a href="#projects">{texts.projects}</a></li>
                    <li><a href="#contact">{texts.contact}</a></li>
                </ul>
            </div>
            <div className={styles.controls}>
                <button onClick={toggleLanguage} className={styles.languageToggle}>
                    {language}
                </button>
            </div>
        </nav>
    );
};
