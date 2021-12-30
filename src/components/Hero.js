import React from 'react';
import styles from '../styles/Hero.module.css';
import sectionStyles from '../styles/Section.module.css';
import BackgroundAnimation from "./BackgroundAnimation";
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
    return (
        <SectionWrapper>
            <div className={styles.mainWrapper}>
                <h2 className={sectionStyles.title}>
                    Nick Hulston
                </h2>
                <h3 className={sectionStyles.subtitle}>
                    Developer • Entrepreneur • Creator
                </h3>
                <p className={sectionStyles.text}>
                    Welcome to my personal website! I am a <span className={sectionStyles.emphasizedText}>computer science</span> student at <span className={sectionStyles.emphasizedText}>Georgia Tech</span>. I am passionate about front-end development, blockchain, and game dev.
                </p>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} >
                        View Resume
                    </button>
                </div>
            </div>
            <BackgroundAnimation/>
        </SectionWrapper>
    );
};

export default Hero;
