// Flashcard.js
import React from 'react';
import styles from './Flashcard.module.css';

const Flashcard = ({ title, subtitle, authorName, authorImage, buttonLabel }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.card_title}>{title}</h2>
            <p className={styles.card_subtitle}>{subtitle}</p>
            <div className={styles.card_author}>
                <img src={authorImage} alt={authorName} className={styles.card_author_image} />
                <p className={styles.card_author_name}>{authorName}</p>
                <button className={styles.card_button}>{buttonLabel}</button>
            </div>
        </div>
    );
};

export default Flashcard;
