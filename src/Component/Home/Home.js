import React from 'react';
import Header from './Header';
import OurProgramm from '../OurProgramm/OurProgramm'
import OurTeam from './OurTeam/OurTeam';
import Training from './Training/Training';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurProgramm></OurProgramm>
            <OurTeam></OurTeam>
            <Training></Training>
        </div>
    );
};

export default Home;