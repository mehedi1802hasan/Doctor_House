import React from 'react';
import Banner from './Banner';
import PatientSays from './PatientSays';
import InformationCard from './InformationCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Patient Says */}
            <PatientSays/>

              {/* 3 information card */}
            <InformationCard></InformationCard>
        </div>
    );
};

export default Home;