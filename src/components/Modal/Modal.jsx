import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.props.children[0].props.children}</h2>
          <div className={styles.headerActions}>
            <a href={content.props.children[2].props.children.props.href} target="_blank" rel="noopener noreferrer" className={styles.codeLink}>
              Code
            </a>
            <button className={styles.closeButton} onClick={onClose}>X</button>
          </div>
        </div>
        <div className={styles.modalBody}>
          {content.props.children.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default Modal;
