import React from 'react';
import Header from './Header';
import OurProgramm from '../OurProgramm/OurProgramm'
import OurTeam from './OurTeam/OurTeam';
import Training from './Training/Training';
import ChooseUs from './ChooseUs/ChooseUs';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurProgramm></OurProgramm>
            <OurTeam></OurTeam>
            <Training></Training>
           <ChooseUs></ChooseUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;