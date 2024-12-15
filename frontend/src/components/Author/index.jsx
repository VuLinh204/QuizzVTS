import React from 'react';
import styles from './Author.module.css';

const Author = ({ authorImage, authorName, lectures, classes }) => {
    return (
        <div className={styles.card}>
            <img src={authorImage} alt={`${authorName} avatar`} className={styles.author_image} />
            <h3 className={styles.author_name}>{authorName}</h3>
            <div className={styles.author_stats}>
                <button className={styles.author_lectures}>
                    <i className="fa-solid fa-book"></i>
                    <span className={styles.author_stats}>
                        {lectures}
                        <p>bài giảng</p>
                    </span>
                </button>
                <button className={styles.author_classes}>
                    <i className="fa-solid fa-users"></i>{' '}
                    <span className={styles.author_stats}>
                        {classes}
                        <p>lớp học</p>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Author;
