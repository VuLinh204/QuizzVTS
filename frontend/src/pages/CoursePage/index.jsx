import React from 'react';
import Navigation from '../../components/Navigation';
import VocabularyCard from '../../components/VocabularyCard';
import StudentCards from '../../components/StudentCards';
import SampleQuestion from '../../components/SampleQuestion';
import WordList from '../../components/WordList';
import './CoursePage.css';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
    const { courseId } = useParams();
    return (
        <div className="coursePage-container">
            <Navigation />
            <VocabularyCard />
            <StudentCards />
            <SampleQuestion />
            <WordList />
        </div>
    );
};

export default CoursePage;
