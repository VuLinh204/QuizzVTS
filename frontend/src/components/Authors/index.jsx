// Authors.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Authors.module.css';
import Author from '../Author';

const Authors = () => {
    const authorsData = [
        {
            authorName: 'JEE_tutor',
            authorImage: '//img.example.com/duck-avatar.png',
            authorRole: null,
            lectures: 493,
            classes: 0,
            link: 'course-detail/user/abc',
            verified: false,
        },
        {
            authorName: 'Sechenov Universkill',
            authorImage: '//img.example.com/cat-avatar.png',
            authorRole: 'Giáo viên',
            lectures: 1134,
            classes: 4,
            link: 'course-detail/user/abc',
            verified: false,
        },
        {
            authorName: 'NEET_tutor',
            authorImage: '//img.example.com/penguin-avatar.png',
            authorRole: null,
            lectures: 42,
            classes: 0,
            link: 'course-detail/user/abc',
            verified: false,
        },
        {
            authorName: 'AI_tutor',
            authorImage: '//img.example.com/robot-avatar.png',
            authorRole: 'Trợ giảng',
            lectures: 100,
            classes: 2,
            link: 'course-detail/user/abc',
            verified: true,
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tác giả hàng đầu</h1>
            <div className={styles.authors}>
                {authorsData.map((author, index) => (
                    <Link to={author.link} key={index} className={styles.authorLink}>
                        <Author
                            key={index}
                            authorImage={author.authorImage}
                            authorName={author.authorName}
                            lectures={author.lectures}
                            classes={author.classes}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Authors;
