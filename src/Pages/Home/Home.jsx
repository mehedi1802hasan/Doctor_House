import React from 'react';
import Banner from './Banner';
import PatientSays from './PatientSays';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Patient Says */}
            <PatientSays/>
        </div>
    );
};

export default Home;