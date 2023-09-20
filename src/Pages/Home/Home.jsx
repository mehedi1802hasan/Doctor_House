import React from 'react';
import Banner from './Banner';
import PatientSays from './PatientSays';
import InformationCard from './InformationCard';
import ContactUS from './ContactUS';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

           <div className='max-w-screen-xl mx-auto '>
             {/* Patient Says */}
             <PatientSays/>

{/* 3 information card */}
<InformationCard></InformationCard>
<ContactUS></ContactUS>
           </div>
        </div>
    );
};

export default Home;