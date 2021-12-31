import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Awards from "../components/Awards";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Projects/>
            <Technologies/>
            <Awards/>
            <Footer/>
        </div>
    );
};

export default Home;
