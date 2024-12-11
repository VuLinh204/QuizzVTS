// Importing the CSS module for styling
import styles from './Library.module.css';
import Library from '../../components/Librarys';
// Importing Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Defining the Home component
export default function LibraryPage() {
    return (
        <>
            <section className={styles.centered_boxes}>
                <Library />
            </section>
        </>
    );
}
