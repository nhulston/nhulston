import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Awards from "../components/Awards";
import Footer from "../components/Footer";
import openAnimation from "../styles/OpenAnimation.module.css";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div>
            <Head style={{color: 'black'}}>
                <title>Nick Hulston</title>
                <meta name="keywords" content="Nick Hulston"/>
            </Head>
            <div>
                <div className={openAnimation.blackOverlay}/>
                <div className={openAnimation.navBar}>
                    <Navbar/>
                </div>
                <Hero/>
                <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="2200">
                {/*<div>*/}
                    <Technologies/>
                </div>
                <div data-aos="fade-right">
                {/*<div>*/}
                    <Awards/>
                </div>
                <div data-aos="fade-up">
                {/*<div>*/}
                    <Projects/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
