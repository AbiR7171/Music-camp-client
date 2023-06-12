import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;