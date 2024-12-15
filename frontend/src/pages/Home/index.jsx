// Importing the CSS module for styling
import Authors from '../../components/Authors';
import Flashcards from '../../components/Flashcards';
import styles from './Home.module.css';

// Importing Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Defining the Home component
export default function Home() {
    return (
        <>
            <section className={styles.centered_boxes}>
                <Flashcards />
                <Authors />
            </section>
        </>
    );
}
