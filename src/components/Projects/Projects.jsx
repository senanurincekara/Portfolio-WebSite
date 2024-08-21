// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { projectsData } from "../../data/projectsData";
import Modal from "../Modal/Modal";
import Slider from 'react-slick';
import { useLanguage } from "../language/LanguageContext";

export const Projects = () => {
    const { language } = useLanguage();
    const currentProjectsData = projectsData[language]; 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <>
            <div  id="projects" className={styles.projectsContainer}>
                <h1 className={styles.heading}>{language === 'EN' ? 'Projects' : 'Projeler'}</h1>
                <div className={styles.projectsGrid}>
                    {currentProjectsData.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div
                                className={styles.projectImage}
                                style={{ backgroundImage: `url(${project.coverImage})` }}
                            >
                                <div className={styles.projectContent}>
                                    <h3>{project.title}</h3>
                                    <div className={styles.descriptionContainer}>
                                        <p>{project.subtitle}</p>
                                    </div>
                                    <a
                                        href="#!"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openModal(
                                                <div className={styles.modalBody}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.modal_description}</p>
                                                    <div className={styles.linkContainer}>
                                                        <a href={project.linkForTheProject} target="_blank" rel="noopener noreferrer">
                                                            {/* {language === 'EN' ? 'View Project' : 'Projeyi Görüntüle'} */}
                                                        </a>
                                                    </div>
                                                    <Slider
                                                        dots={true}
                                                        infinite={true}
                                                        speed={500}
                                                        slidesToShow={1}
                                                        slidesToScroll={1}
                                                        className={styles.imageSlider}
                                                    >
                                                        {project.imagesList.map((image, index) => (
                                                            <div key={index}>
                                                                <img src={image} alt={`Project ${index + 1}`} />
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                </div>
                                            );
                                        }}
                                    >
                                        {language === 'EN' ? 'Details' : 'Detaylar'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </>
    );
};
