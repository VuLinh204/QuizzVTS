// Importing the CSS module for styling
import styles from './Home.module.css';

// Importing Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Defining the Home component
export default function Home() {
    return (
        <section className={styles.centered_boxes}>
            <Link to={'/play-quiz'} className={styles.box}>
                <p className={styles.box_title}>Play Quiz</p>
            </Link>

            <Link to={'/create-quiz'} className={styles.box}>
                <p className={styles.box_title}>Create new quiz</p>
            </Link>

            <Link to={'/my-quizzes'} className={styles.box}>
                <p className={styles.box_title}>My Quizzes</p>
            </Link>
        </section>
    );
}
