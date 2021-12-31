import React from 'react';
import styles from '../styles/Hero.module.css';
import sectionStyles from '../styles/Section.module.css';
import BackgroundAnimation from "./BackgroundAnimation";

const Hero = () => {
    return (
        <div className={sectionStyles.overrideWrapper}>
            <div className={styles.mainWrapper}>
                <h2 className={sectionStyles.title}>
                    Nick Hulston
                </h2>
                <h3 className={sectionStyles.subtitle}>
                    Developer<span className={styles.hideOnSmallScreen}> • </span><br className={styles.hideOnBigScreen}/>Entrepreneur • Creator
                </h3>
                <p className={sectionStyles.text}>
                    Welcome to my personal website! I am a <span className={sectionStyles.emphasizedText}>computer science</span> student at <span className={sectionStyles.emphasizedText}>Georgia Tech</span>. My passions are mobile, web, and blockchain development.
                </p>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} >
                        View Resume
                    </button>
                </div>
            </div>
            <BackgroundAnimation/>
            <div className={sectionStyles.divider}/>
        </div>
    );
};

export default Hero;
