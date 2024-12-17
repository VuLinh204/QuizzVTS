import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StudentLearnedCards.module.css';
import StudentLearnedCard from '../StudentLearnedCard';

const StudentLearnedCards = () => {
    const StudentLearnedCardsData = [
        {
            title: 'SMARTER TGAT1_2024_VOCAB',
            subtitle: '896 thuật ngữ',
            authorName: 'GATENGCOOLCOOLI',
            authorImage: '/path/to/gatengcoolcooli.png',
            link: '/course-detail/tgat1-2024-vocab',
        },
        {
            title: 'matematica',
            subtitle: '15 thuật ngữ',
            authorName: 'quizlette727480',
            authorImage: '/path/to/quizlette727480.png',
            link: '/course-detail/matematica',
        },
        {
            title: '27 Amendments',
            subtitle: '27 thuật ngữ',
            authorName: 'MsOlsonMTA',
            authorImage: '/path/to/msolsonmta.png',
            link: '/course-detail/27-Amendments',
        },
    ];

    return (
        <div className="container">
            <h1 className={styles.title}>Học sinh cũng đã học</h1>
            <div className={styles.studentLearnedCards}>
                {StudentLearnedCardsData.map((studentLearnedCard, index) => (
                    <Link to={studentLearnedCard.link} key={index} className={styles.studentLearnedCardLink}>
                        <StudentLearnedCard
                            title={studentLearnedCard.title}
                            subtitle={studentLearnedCard.subtitle}
                            authorName={studentLearnedCard.authorName}
                            authorImage={studentLearnedCard.authorImage}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default StudentLearnedCards;
