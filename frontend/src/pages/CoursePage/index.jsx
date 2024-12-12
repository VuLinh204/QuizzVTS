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
            <h1 className="title">Other branches สาขาอื่นๆ</h1>
            <div className="rate">
                <i class="fa-solid fa-star"></i>
                5.0 (1 đánh giá)
            </div>
            <Navigation />
            <VocabularyCard />
            <StudentCards />
            <SampleQuestion />
            <WordList />
        </div>
    );
};

export default CoursePage;
