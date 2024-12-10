// Flashcards.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Flashcards.module.css';
import Flashcard from '../Flashcard';

const Flashcards = () => {
    const flashcardsData = [
        {
            title: 'SMARTER TGAT1_2024_VOCAB',
            subtitle: '896 thuật ngữ',
            authorName: 'GATENGCOOLCOOLI',
            authorImage: '/path/to/gatengcoolcooli.png',
            buttonLabel: 'Giáo viên',
        },
        {
            title: 'matematica',
            subtitle: '15 thuật ngữ',
            authorName: 'quizlette727480',
            authorImage: '/path/to/quizlette727480.png',
            buttonLabel: 'Giáo viên',
        },
        {
            title: '27 Amendments',
            subtitle: '27 thuật ngữ',
            authorName: 'MsOlsonMTA',
            authorImage: '/path/to/msolsonmta.png',
            buttonLabel: 'Giáo viên',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bộ thẻ ghi nhớ phổ biến</h1>
            <div className={styles.flashcards}>
                {flashcardsData.map((flashcard, index) => (
                    <Flashcard
                        key={index}
                        title={flashcard.title}
                        subtitle={flashcard.subtitle}
                        authorName={flashcard.authorName}
                        authorImage={flashcard.authorImage}
                        buttonLabel={flashcard.buttonLabel}
                    />
                ))}
            </div>
        </div>
    );
};

export default Flashcards;
