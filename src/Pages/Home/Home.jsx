import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import OurActivity from './OurActivity';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <PopularInstructor/>
            <OurActivity/>
        </div>
    );
};

export default Home;